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

## Reference

Below is a reference used for this project:

| Source | Description |
|--------|-------------|
| [EP 1](https://youtu.be/-gOvzR_wpk0?si=vqQ9fgx3dEmlhJBx) | Create a database structure |
| [EP 2](https://youtu.be/wtbj0KqLxvM?si=06bPrp3hhQX01C_S) | Create a layout page and make routes  |
| [EP 3](https://youtu.be/EVEAO46Gw54?si=jmam2Gx-H6TAlfUm) | Create a register login page and make register login function |
| [EP 4](https://youtu.be/ArfRL2PWJS0?si=4Bh0ASGpWpkugOS9) | Create a ProtectedRouteUser and ProtectedRouteAdmin |
| [EP 5](https://youtu.be/xeHAzTije8I?si=a1gxLaIQQFat26O5) | Style the layoutAdmin by using the tailwind css daisy ui lucide react |
| [EP 6](https://youtu.be/EID3dNLHU30?si=_NQ2jmhGYVu83lie) | Create a FormCategory and make handleSubmit getCategory handleRemove  |
| [EP 7](https://youtu.be/sbnM68dj9vs?si=JVkKpPn-CC5s9WeX) | Create a add product(admin panel)  |

# Initialize a new Node.js project
```bash
npm init -y
```


# Install necessary dependencies
```bash
npm install express morgan cors nodemon
```







# Install Prisma


```bash
npm install prisma
```
# Initialize Prisma in the project
```bash
npx prisma init
```


# Install Prisma client
```bash
npm install @prisma/client
```






# Run Prisma migration
```bash
npx prisma migrate dev --name init
```



