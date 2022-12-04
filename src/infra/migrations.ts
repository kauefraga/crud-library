import { createBooksTable } from './migrations/create-books-table';
import { insertBooks } from './migrations/insert-books';

// factory pattern
async function migrationsRunner() {
  await createBooksTable();

  await insertBooks([
    { title: 'The Lord of the Rings', description: 'Written between 1937 and 1949' },
    { title: 'The Hobbit', description: 'Continuation of The Lord of the Rings' },
  ]);
}

try {
  migrationsRunner();
} catch (e: any) {
  console.error(`[infra] ${e.message}`);
}
