import { Request, Response } from 'express';
import { ApiResponse } from '../../types/api-response';
import { FindBookByIdUseCase } from '../../../core/usecases/find-book-use-case/find-by-id';
import { postgresRepository } from '../../../core/repositories/implementations/postgres-repository';

export async function GetBookByIdController(
  request: Request<{ bookId: string }>,
  response: Response<ApiResponse>,
) {
  const { bookId } = request.params;

  const findBookByIdUseCase = new FindBookByIdUseCase(
    postgresRepository,
  );

  try {
    const book = await findBookByIdUseCase.execute(bookId);

    return response.status(200).json({
      success: true,
      data: book,
      now: new Date(),
    });
  } catch (err: any) {
    return response.status(400).json({
      success: false,
      error: {
        name: 'Something went wrong',
        message: err.message,
      },
      now: new Date(),
    });
  }
}
