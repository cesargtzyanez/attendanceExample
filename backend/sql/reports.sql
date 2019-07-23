CREATE TABLE reports(
  id SERIAL PRIMARY KEY,
  "reportDate" TIMESTAMP NOT NULL,
  "reportType" VARCHAR(16),
  "userId" INTEGER,
  FOREIGN KEY ("userId") REFERENCES users(id)
)