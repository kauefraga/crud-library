import { Request, Response } from 'express';
import { ApiResponse } from '../../types/api-response';
import { sql } from '../../../infra/postgres';
import { Book } from '../../../core/entities/book';

interface UpdateBookParams {
  bookId: string;
}

interface UpdateBookRequest {
  title: string;
  description: string;
}

export async function UpdateBookByIdController(
  request: Request<UpdateBookParams, unknown, UpdateBookRequest>,
  response: Response<ApiResponse>,
) {
  const { bookId } = request.params;
  const { title, description } = request.body;

  const book = await sql`
    SELECT * FROM books WHERE id = ${bookId}
  `;

  if (!book.length) {
    response.status(400).json({
      success: false,
      data: {
        error: {
          name: 'The requested book does not exists',
          message: 'Cannot update nonexisting book',
        },
        now: new Date(),
      },
    });
  }

  const newBook = new Book({
    title,
    description,
  });

  await sql`
    UPDATE books
    SET title = ${newBook.title}, description = ${newBook.description}
    WHERE id = ${bookId}
  `;

  return response.status(200).json({
    success: true,
    data: {
      bookId,
      book_diff: {
        before: {
          title: book[0].title,
          description: book[0].description,
        },
        after: {
          title: newBook.title,
          description: newBook.description,
        },
      },
      now: new Date(),
    },
  });
}
