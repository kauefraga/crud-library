/* eslint-disable class-methods-use-this */
import { Book } from '../../entities/book';
import { BookDiff, BooksRepository } from '../books-repository';
import { sql } from '../../../infra/postgres';

class PostgresRepository implements BooksRepository {
  async create({ title, description }: Book): Promise<void> {
    const book = new Book({ title, description });

    if (!book.id) throw new Error(`${title} has no id`);

    await sql`
      INSERT INTO books (
        id, title, description
      ) VALUES (
        ${book.id},
        ${book.title},
        ${book.description}
      )
    `;
  }

  async findMany(): Promise<Book[]> {
    const books = await sql<[Book]>`
      SELECT * FROM books
    `;

    return books ?? [];
  }

  async findById(bookId: string): Promise<Book> {
    const [book] = await sql<[Book]>`
      SELECT * FROM books
      WHERE id = ${bookId}
    `; // or book[0]

    return book;
  }

  async findByTitle(bookTitle: string): Promise<Book> {
    const [book] = await sql<[Book]>`
      SELECT * FROM books
      WHERE title = ${bookTitle}
    `; // or book[0]

    return book;
  }

  async updateById(bookId: string, newBook: Book): Promise<BookDiff> {
    const book = await this.findById(bookId);

    await sql`
      UPDATE books
      SET title = ${newBook.title}, description = ${newBook.description}
      WHERE id = ${bookId}
    `;

    return {
      id: bookId,
      before: book,
      after: newBook,
    };
  }

  async deleteById(bookId: string): Promise<void> {
    const book = await this.findById(bookId);

    if (book) {
      await sql`
        DELETE FROM books WHERE id = ${bookId}
      `;
    }
  }
}

export const postgresRepository = new PostgresRepository();
