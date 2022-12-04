import { Request, Response } from 'express';
import { ApiResponse } from '../../types/api-response';
import { sql } from '../../../infra/postgres';

export async function GetBooksController(
  _: Request,
  response: Response<ApiResponse>,
) {
  const books = await sql`
    SELECT * FROM books
  `;

  if (!books.length) {
    response.status(400).json({
      success: false,
      data: {
        error: {
          name: 'No books',
          message: 'The query does not found any book',
        },
        now: new Date(),
      },
    });
  }

  return response.status(200).json({
    success: true,
    data: {
      books,
      now: new Date(),
    },
  });
}
