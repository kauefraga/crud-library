import { describe, it, expect } from 'vitest';
import { Book } from '../../entities/book';
import { postgresRepository } from '../../repositories/implementations/postgres-repository';
import { DeleteBookByTitleUseCase } from './delete-book';

describe('Delete book use case', () => {
  it('should be able to delete a book', async () => {
    const deleteBookByTitleUseCase = new DeleteBookByTitleUseCase(
      postgresRepository,
    );

    await postgresRepository.create(
      new Book({
        title: 'test title',
        description: 'test description',
      }),
    );

    expect(deleteBookByTitleUseCase.execute('test title')).resolves.not.toThrow();
  });

  it('should not be able to delete a book', async () => {
    const deleteBookByTitleUseCase = new DeleteBookByTitleUseCase(
      postgresRepository,
    );

    await postgresRepository.create(
      new Book({
        title: 'test title',
        description: 'test description',
      }),
    );

    expect(deleteBookByTitleUseCase.execute('')).rejects.toThrow();
  });
});
