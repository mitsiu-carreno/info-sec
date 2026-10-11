const { DatabaseSync } = require('node:sqlite');

const db = new DatabaseSync('myapp.db');

db.exec('PRAGMA journal_mode = WAL'); 	// Better i/o concurrency
db.exec('PRAGMA foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )
`);

module.exports = db;
