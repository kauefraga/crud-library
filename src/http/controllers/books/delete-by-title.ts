import { Request, Response } from 'express';
import { postgresRepository } from '../../../core/repositories/implementations/postgres-repository';
import { DeleteBookByTitleUseCase } from '../../../core/usecases/delete-book-use-case/delete-book';
import { ApiResponse } from '../../types/api-response';

export async function DeleteBookByTitleController(
  request: Request<unknown, unknown, { title: string }>,
  response: Response<ApiResponse>,
) {
  const { title } = request.body;

  const deleteBookByTitleUseCase = new DeleteBookByTitleUseCase(
    postgresRepository,
  );

  try {
    await deleteBookByTitleUseCase.execute(title);

    return response.status(204).json({
      success: true,
      data: `The book ${title} has been deleted!`,
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
