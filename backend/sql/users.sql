CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(64),
  email VARCHAR(30),
  role VARCHAR(16),
  password VARCHAR(120)
);

INSERT INTO users(username, role) VALUES('adminA','admin');
INSERT INTO users(username, role) VALUES('adminB','admin');

INSERT INTO users(username, role) VALUES('Karla','employee');
INSERT INTO users(username, role) VALUES('Leo','employee');
INSERT INTO users(username, role) VALUES('Constanza','employee');
INSERT INTO users(username, role) VALUES('Cesar','employee');