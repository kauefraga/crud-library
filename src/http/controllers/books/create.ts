import { Request, Response } from 'express';
import { ApiResponse } from '../../types/api-response';
import { postgresRepository } from '../../../core/repositories/implementations/postgres-repository';
import {
  CreateBookUseCase,
  CreateBookRequest,
  CreateBookResponse,
} from '../../../core/usecases/create-book-use-case/create-book';

export async function CreateBookController(
  request: Request<unknown, unknown, CreateBookRequest>,
  response: Response<ApiResponse<CreateBookResponse>>,
) {
  const { title, description } = request.body;

  const createBookUseCase = new CreateBookUseCase(
    postgresRepository,
  );

  try {
    const book = await createBookUseCase.execute({
      title,
      description,
    });

    return response.status(201).json({
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
