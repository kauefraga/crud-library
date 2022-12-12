import { Request, Response } from 'express';
import { ApiResponse } from '../../types/api-response';
import { FindBooksUseCase } from '../../../core/usecases/find-book-use-case/find-many';
import { postgresRepository } from '../../../core/repositories/implementations/postgres-repository';

export async function GetBooksController(
  request: Request,
  response: Response<ApiResponse>,
) {
  const findBooksUseCase = new FindBooksUseCase(
    postgresRepository,
  );

  try {
    const books = await findBooksUseCase.execute();

    return response.status(200).json({
      success: true,
      data: books,
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
