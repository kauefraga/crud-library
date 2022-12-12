import { it, describe, expect } from 'vitest';
// import { Book } from '../../entities/book';
import { postgresRepository } from '../../repositories/implementations/postgres-repository';
import { FindBooksUseCase } from './find-many';
// import { FindBookByIdUseCase } from './find-by-id';

describe('Find books use case', () => {
  it('should be able to find many books', async () => {
    const findBooksUseCase = new FindBooksUseCase(
      postgresRepository,
    );

    expect(findBooksUseCase.execute()).resolves.toBeInstanceOf([]);
  });

  it.skip('should be able to find a book by id', async () => {});
});
