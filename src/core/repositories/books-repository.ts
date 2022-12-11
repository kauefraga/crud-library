import { Book } from '../entities/book';

export interface BookDiff {
  id: string;
  before: Omit<Book, 'id'>;
  after: Omit<Book, 'id'>;
}

export interface BooksRepository {
  create(book: Book): Promise<void>;
  findMany(): Promise<Book[]>;
  findById(bookId: string): Promise<Book>;
  findByTitle(bookTitle: string): Promise<Book>;
  updateById(
    bookId: string,
    newBook: Book
  ): Promise<BookDiff>;
  deleteById(bookId: string): Promise<void>;
}
