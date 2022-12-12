import { Book } from '../../entities/book';
import { BooksRepository } from '../../repositories/books-repository';

export type FindBooksResponse = Book[];

export class FindBooksUseCase {
  constructor(
    private booksRepository: BooksRepository,
  ) {}

  async execute(): Promise<FindBooksResponse> {
    const books = await this.booksRepository.findMany();

    return books;
  }
}
