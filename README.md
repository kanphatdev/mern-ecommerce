## Backend & Dependencies

Below is a list of the main dependencies used in the backend of this project:

| Dependency    | Description                                                             |
|---------------|-------------------------------------------------------------------------|
| express       | Fast, unopinionated, minimalist web framework for Node.js               |
| morgan        | HTTP request logger middleware for Node.js                             |
| cors          | Middleware to enable Cross-Origin Resource Sharing (CORS)              |
| nodemon       | Tool that helps develop Node.js-based applications by automatically restarting the server when file changes are detected |
| jsonwebtoken  | Library to create, sign, and verify JSON Web Tokens (JWTs)             |
| bcrypt        | Library to hash and compare passwords for secure storage               |

## Providers & Tools

The following table lists the main tools and providers used in this project:

| Tool       | Description                                                       |
|------------|-------------------------------------------------------------------|
| Prisma     | Next-generation ORM for Node.js and TypeScript to interact with databases efficiently |
| Workbench  | MySQL Workbench: A unified visual tool for database design and management |
| MySQL      | Open-source relational database management system (RDBMS)         |



# Initialize a new Node.js project

npm init -y

# Install necessary dependencies

npm install express morgan cors nodemon

echo "Project setup complete!"




# Install Prisma

npm install prisma

# Initialize Prisma in the project

npx prisma init

# Install Prisma client

npm install @prisma/client

echo "Prisma setup complete!"



# Run Prisma migration

npx prisma migrate dev --name init

echo "Migration complete!"
