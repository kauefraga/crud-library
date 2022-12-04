import { Request, Response } from 'express';
import { ApiResponse } from '../../types/api-response';
import { sql } from '../../../infra/postgres';
import { Book } from '../../../core/entities/book';

interface CreateBookRequest {
  title: string
  description: string
}

export async function CreateBookController(
  request: Request<unknown, unknown, CreateBookRequest>,
  response: Response<ApiResponse>,
) {
  const { title, description } = request.body;

  const book = new Book({ title, description });

  if (!book.id) throw new Error('The book has not id specified');

  await sql`
    INSERT INTO books (
      id, title, description
    ) VALUES (
      ${book.id},
      ${book.title},
      ${book.description}
    )
  `;

  return response.status(201).json({
    success: true,
    data: {
      book: {
        id: book.id,
        title: book.title,
        description: book.description,
      },
      now: new Date(),
    },
  });
}
