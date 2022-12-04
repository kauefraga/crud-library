import { Request, Response } from 'express';
import { ApiResponse } from '../../types/api-response';
import { sql } from '../../../infra/postgres';

export async function GetBookByIdController(
  request: Request<{ bookId: string }>,
  response: Response<ApiResponse>,
) {
  const { bookId } = request.params;

  const book = await sql`
    SELECT * FROM books WHERE id = ${bookId}
  `;

  if (!book.length) {
    response.status(400).json({
      success: false,
      data: {
        error: {
          name: 'The requested book does not exists',
          message: 'The query does not found the requested book',
        },
        now: new Date(),
      },
    });
  }

  return response.status(200).json({
    success: true,
    data: {
      book: book[0],
      now: new Date(),
    },
  });
}
