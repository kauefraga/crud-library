import { Book } from '../../entities/book';
import { BooksRepository } from '../../repositories/books-repository';

export type FindBookByIdRequest = string;

export type FindBookByIdResponse = Book;

export class FindBookByIdUseCase {
  constructor(
    private booksRepository: BooksRepository,
  ) {}

  async execute(id: FindBookByIdRequest): Promise<FindBookByIdResponse> {
    if (!id) throw new Error('No book id provided');

    const book = await this.booksRepository.findById(id);

    if (!book) throw new Error(`Book ${id} not found`);

    return book;
  }
}
