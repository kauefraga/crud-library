import { it, describe, expect } from 'vitest';
import { CreateBookUseCase } from './create-book';
import { postgresRepository } from '../../repositories/implementations/postgres-repository';
import { Book } from '../../entities/book';

describe('Create Book Use Case', () => {
  it('should be able to create an book', async () => {
    const createBookUseCase = new CreateBookUseCase(
      postgresRepository,
    );

    expect(createBookUseCase.execute({
      title: 'test title',
      description: 'test description',
    })).resolves.toBeInstanceOf(Book);
  });

  it.skip('should not be able to create an book (same title)', async () => {
    const createBookUseCase = new CreateBookUseCase(
      postgresRepository,
    );

    await createBookUseCase.execute({
      title: 'test title',
      description: 'test description',
    });

    expect(createBookUseCase.execute({
      title: 'test title',
      description: 'test description',
    })).rejects.toThrow();
  });

  it('should not be able to create an title (empty title)', async () => {
    const createBookUseCase = new CreateBookUseCase(
      postgresRepository,
    );

    expect(createBookUseCase.execute({
      title: '',
      description: 'test description',
    })).rejects.toThrow();

    expect(createBookUseCase.execute({
      title: 'test title',
      description: '',
    })).rejects.toThrow();
  });
});
