import { sql } from '../postgres';

export async function createBooksTable() {
  console.log('[infra] Creating books table');

  await sql`
    CREATE TABLE IF NOT EXISTS books (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL
    )
  `;
}
