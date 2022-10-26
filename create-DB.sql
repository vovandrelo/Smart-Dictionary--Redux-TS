CREATE TABLE "users"(
    "id" SERIAL PRIMARY KEY,
    "role" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "login" VARCHAR(255) NOT NULL UNIQUE,
    "pass" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE "words"(
    "id" SERIAL PRIMARY KEY,
	"id-user" INTEGER NOT NULL,
    "rus-translation" VARCHAR(255) NOT NULL,
    "eng-translation" VARCHAR(255) NOT NULL,
    "example" TEXT NULL,
	FOREIGN KEY ("id-user") REFERENCES "users" ("id")
);


CREATE TABLE "repetition"(
    "id" SERIAL PRIMARY KEY,
	"id-word" INTEGER NOT NULL,
    "stage" INTEGER NOT NULL,
    "next-repetition" TIMESTAMP NOT NULL,
	FOREIGN KEY ("id-word") REFERENCES "words" ("id")
);