import { type SQLiteDatabase } from "expo-sqlite";

export async function migrate(database: SQLiteDatabase) {
  await database.execAsync(`
    PRAGMA foreign_key = ON;

    CREATE TABLE IF NOT EXISTS targets (
     	id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      amount FLOAT NOT NULL,
      created_at timestamp NOT NULL DEFAULT current_timestamp,
			updated_at timestamp NOT NULL DEFAULT current_timestamp
    );
    
    `);
}
