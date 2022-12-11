import { describe, expect, it } from 'vitest';
import { Book } from './book';

describe('Book entity', () => {
  it('should be able to create a book', () => {
    const book = new Book({
      title: 'test title',
      description: 'test description',
    });

    expect(book).toBeInstanceOf(Book);
  });

  it('should return book informations', () => {
    const book = new Book({
      title: 'test title',
      description: 'test description',
    });

    expect(book.title).toEqual('test title');
    expect(book.description).toEqual('test description');
  });

  it('should be able to update a book', () => {
    const book = new Book({
      title: 'test title',
      description: 'test description',
    });

    book.title = 'new test title';
    book.description = 'new test description';

    expect(book.title).toEqual('new test title');
    expect(book.description).toEqual('new test description');
  });
});
