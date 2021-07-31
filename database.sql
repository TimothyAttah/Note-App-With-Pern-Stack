CREATE DATABASE pernstack;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE todos(
  todo_id SERIAL,
  user_id UUID NOT NULL,
  task VARCHAR(255) NOT NULL,
  isComplete boolean,
  PRIMARY KEY (todo_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE incomes(
  incomes_id uuid DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  description VARCHAR(255) NOT NULL,
  values INTEGER NOT NULL,
  PRIMARY KEY (incomes_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE expenses(
  expenses_id uuid DEFAULT uuid_generate_v4(),
  user_id UUID,
  description VARCHAR(255) NOT NULL,
  values INTEGER NOT NULL,
  PRIMARY KEY (expenses_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);



--  Test DATABASE
--  CREATE TABLE users(
--  UserId SERIAL PRIMARY KEY,
--  FirstName VARCHAR(255) NOT NULL,
--  LastName VARCHAR(255) NOT NULL,
--  Email VARCHAR(255) NOT NULL UNIQUE,
--  Password VARCHAR(255) NOT NULL,
--  ProfilePicture VARCHAR(500),
--  CoverPicture VARCHAR(500),
--  Followers TEXT[],
--  Followings TEXT[],
--  IsAdmin boolean,
--  Description VARCHAR(255),
--  City VARCHAR(255),
--  Country VARCHAR(255),
--  Relationship INTEGER,
--  CreatedAt DATE);


--  CREATE TABLE users(
--    userId SERIAL PRIMARY KEY,
--    firstName VARCHAR(50) NOT NULL,
--    lastName VARCHAR(50) NOT NULL,
--    email VARCHAR(100) NOT NULL UNIQUE,
--    password VARCHAR(255) NOT NULL,
--    CreatedAt DATE DEFAULT CURRENT_DATE
--  );

 CREATE TABLE users(
   userId SERIAL PRIMARY KEY,
   firstName VARCHAR(50) NOT NULL,
   lastName VARCHAR(50) NOT NULL,
   email VARCHAR(100) NOT NULL UNIQUE,
   password VARCHAR(255) NOT NULL,
   CreatedAt TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
 );

--  CREATE TABLE friend(
--    friendId SERIAL PRIMARY KEY,
--    userId SERIAL NOT NULL,
--    followings TEXT [],
--    followers TEXT [],
--    FOREIGN KEY (userId) REFERENCES users(userId)
--  );

 CREATE TABLE friend(
   friendId SERIAL PRIMARY KEY,
   firstName VARCHAR(50) NOT NULL,
   lastName VARCHAR(50) NOT NULL,
   followersId INT,
   FOREIGN KEY (followersId) REFERENCES friend(friendId)
   ON DELETE CASCADE
 );




INSERT INTO users(firstName, lastName, email, password) 
VALUES ('Jane', 'Doe', 'jane@gmail.com', '123456');

-- Insert into friend table with array
INSERT INTO friend(firstName, lastName, followersId)
VALUES ('Jane', 'Doe', NULL), ('Raju', 'Kumar', 1),
('Timo', 'McCall', 2), ('Kate', 'Triggers', 1);

INSERT INTO friend( followersId)
VALUES ( 4);

UPDATE friend SET followersId = 3 
WHERE friendId = 1;

SELECT e.firstName || ' ' || e.lastName friend,
m.firstName || ' ' || m.lastName followers 
FROM friend e
INNER JOIN friend m ON m.friendId = e.followersId ORDER BY followers;

SELECT * FROM friend;

SELECT followersId FROM friend WHERE friendId = 1;

SELECT firstName, lastName FROM friend WHERE followersId = 1;

SELECT * FROM friend WHERE followersId = 1;



INSERT INTO users(first_name, last_name, user_email, user_password) VALUES ('Jane', 'Doe', 'jane@gmail.com', '123456');
INSERT INTO expenses(description, values) VALUES ('Salary', 5000);