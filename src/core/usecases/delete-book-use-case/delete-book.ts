import { BooksRepository } from '../../repositories/books-repository';

export type DeleteBookByTitleRequest = string;

export type DeleteBookByTitleResponse = void;

export class DeleteBookByTitleUseCase {
  constructor(
    private booksRepository: BooksRepository,
  ) {}

  async execute(title: DeleteBookByTitleRequest): Promise<DeleteBookByTitleResponse> {
    if (!title) throw new Error('No title provided');

    const book = await this.booksRepository.findByTitle(title);

    if (!book) throw new Error(`Book ${title} not found`);

    await this.booksRepository.deleteByTitle(title);
  }
}
