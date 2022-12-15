import { Request, Response } from 'express';
import { ApiResponse } from '../../types/api-response';
import {
  UpdateBookByTitleRequest,
  UpdateBookByTitleUseCase,
} from '../../../core/usecases/update-book-use-case/update-book';
import { postgresRepository } from '../../../core/repositories/implementations/postgres-repository';
import { BookDiff } from '../../../core/repositories/books-repository';

export async function UpdateBookByTitleController(
  request: Request<unknown, unknown, UpdateBookByTitleRequest>,
  response: Response<ApiResponse<BookDiff>>,
) {
  const { title, newTitle, newDescription } = request.body;

  const updateBookByTitleUseCase = new UpdateBookByTitleUseCase(
    postgresRepository,
  );

  try {
    const bookDiff = await updateBookByTitleUseCase.execute({
      title, newTitle, newDescription,
    });

    return response.status(200).json({
      success: true,
      data: bookDiff,
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
