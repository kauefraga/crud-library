import 'dotenv/config';
import postgres from 'postgres';

const DATABASE_CONNECTOR = process.env.NODE_ENV === 'development'
  ? process.env.DATABASE_URL
  : 'production url';

if (!DATABASE_CONNECTOR) {
  throw new Error('Database connection not configured');
}

export const sql = postgres(DATABASE_CONNECTOR, {
  transform: postgres.toCamel,
});
