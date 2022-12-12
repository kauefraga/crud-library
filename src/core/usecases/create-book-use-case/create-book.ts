import { Book } from '../../entities/book';
import { BooksRepository } from '../../repositories/books-repository';

export interface CreateBookRequest {
  title: string;
  description: string;
}

export type CreateBookResponse = Book;

export class CreateBookUseCase {
  constructor(
    private booksRepository: BooksRepository,
  ) {}

  async execute({ title, description }: CreateBookRequest): Promise<CreateBookResponse> {
    if (!title && !description) {
      throw new Error('No title/description provided');
    }

    const bookAlreadyExists = await this.booksRepository.findByTitle(title);

    if (bookAlreadyExists) {
      throw new Error(`Book ${title} already exists`);
    }

    const book = new Book({
      title,
      description,
    });

    await this.booksRepository.create(book);

    return book;
  }
}
