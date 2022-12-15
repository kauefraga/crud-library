import { Book } from '../../entities/book';
import { BookDiff, BooksRepository } from '../../repositories/books-repository';

export interface UpdateBookByTitleRequest {
  title: string;
  newTitle: string;
  newDescription: string;
}

export class UpdateBookByTitleUseCase {
  constructor(
    private booksRepository: BooksRepository,
  ) {}

  async execute({
    title,
    newTitle,
    newDescription,
  }: UpdateBookByTitleRequest): Promise<BookDiff> {
    if (!title) throw new Error('No title provided');
    if (!newTitle) throw new Error('No new title provided');
    if (!newDescription) throw new Error('No new description provided');

    const book = await this.booksRepository.findByTitle(title);

    if (!book.id || !book) throw new Error(`Book ${title} not found`);

    const newBook = new Book({
      title: newTitle,
      description: newDescription,
    });

    const bookDiff = await this.booksRepository.updateByTitle(title, newBook);

    return bookDiff;
  }
}
