import { Request, Response } from 'express';
import { ApiResponse } from '../../types/api-response';
import { sql } from '../../../infra/postgres';

export async function DeleteBookByIdController(
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
          message: 'Cannot delete the requested book',
        },
        now: new Date(),
      },
    });
  }

  await sql`
    DELETE FROM books WHERE id = ${bookId}
  `;

  return response.status(200).json({
    success: true,
    data: {
      deletedBook: book[0],
      now: new Date(),
    },
  });
}
