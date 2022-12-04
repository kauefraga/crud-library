import { Book } from '../../core/entities/book';
import { sql } from '../postgres';

interface InsertBookRequest {
  title: string;
  description: string;
}

export async function insertBooks(books?: InsertBookRequest[]) {
  console.log('[infra] Inserting books');

  books?.forEach(async ({ title, description }) => {
    const book = new Book({
      title,
      description,
    });

    if (!book.id) throw new Error('Book does not has a identifier');

    await sql`
      INSERT INTO books (
        id, title, description
      ) VALUES (
        ${book.id},
        ${book.title},
        ${book.description}
      )
    `;
  });
}
