CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(64),
  email VARCHAR(30),
  role VARCHAR(16),
  password VARCHAR(120)
);
