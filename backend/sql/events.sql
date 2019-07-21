CREATE TABLE events(
  id SERIAL PRIMARY KEY,
  "eventDate" TIMESTAMP NOT NULL,
  "eventType" VARCHAR(16),
  "userId" INTEGER,
  FOREIGN KEY ("userId") REFERENCES users(id)
)