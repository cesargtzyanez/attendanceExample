CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(64),
  role VARCHAR(16)
);

INSERT INTO users(username, role) VALUES('adminA','admin');
INSERT INTO users(username, role) VALUES('adminB','admin');

INSERT INTO users(username, role) VALUES('Karla','employee');
INSERT INTO users(username, role) VALUES('Leo','employee');
INSERT INTO users(username, role) VALUES('Constanza','employee');
INSERT INTO users(username, role) VALUES('Cesar','employee');