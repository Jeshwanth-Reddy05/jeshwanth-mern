# Week 3: REST APIs, MongoDB & Database Integration

This week marks the transition from frontend JavaScript scripting to Backend Software Engineering. The focus is on setting up production-ready web servers, handling asynchronous network requests, routing application pathways, writing database schemas, and performing structured queries on MongoDB.

---

## Folder Roadmap

| Subdirectory | Core Objective | Key Files |
| :--- | :--- | :--- |
| **BackendDemo** | In-Memory REST API Server with custom Express routing | `server.js`, `APIs/user-api.js`, `APIs/product-api.js` |
| **BackendDemoUsingDB** | Mongoose DB integration with structured models | `server.js`, `models/userModel.js`, `APIs/UserApi.js` |
| **MongoDB-Commands** | Core MongoDB CRUD, logical operators, and array update sheets | `mongoDB-commands.txt` |

---

## System Architecture

1. Client (REST Client / Postman) sends HTTP requests.
2. Express Web Server intercepts the requests and parses JSON.
3. Routers map the routes to the handler controllers.
4. Data is stored either in memory (BackendDemo) or in a MongoDB Database using Mongoose (BackendDemoUsingDB).

---

## Module Breakdowns

### 1. In-Memory Express Servers (BackendDemo)
* Defines REST endpoints supporting all HTTP verbs: GET, POST, PUT, and DELETE.
* Uses `express.json()` as a global body-parsing middleware.
* Divides application routes cleanly using `express.Router()` scopes:
  - `/user-api` handles user resource allocations.
  - `/product-api` manages product catalogs.

---

### 2. MongoDB Shell Query Playbook (MongoDB-Commands)
Contains reference commands detailing operations inside the MongoDB Shell (`mongosh`):
* **CRUD Basics**: `insertOne()`, `insertMany()`, `find()`, `updateOne()`, `deleteOne()`.
* **Comparison Operators**: `$eq`, `$gt`, `$lt`, `$ne`, `$in`.
* **Logical Combinations**: `$and`, `$or` matching nested elements.
* **Array Modifiers**:
  - `$push` & `$each`: Add elements dynamically to nested array structures.
  - `$pop`: Slice trailing/leading array entries.
  - `$pullAll`: Remove matching arrays atomically in a single execution.

---

### 3. Database Integrated Servers (BackendDemoUsingDB)
Connects the API routes directly to a MongoDB database using Mongoose ODM (Object Document Mapper):
* **Db Lifecycle Handling**: Connects securely before starting the server listener:
  ```javascript
  async function connectDB() {
    try {
      await connect('mongodb://localhost:27017/anuragdb2');
      app.listen(port, () => console.log('Server online'));
    } catch(err) {
      console.error('Database connection failed', err);
    }
  }
  ```
* **Mongoose Schema & Models**: Maps logical blueprints defining fields, types, and constraints (e.g. String, Number, validations) to direct database records.
* **Robust Error Handling**: Utilizes an Express error-catching middleware to gracefully return 500 status codes during query failures:
  ```javascript
  app.use((err, req, res, next) => {
    res.status(500).json({ message: "error", reason: err.message });
  });
  ```

---

## API Testing & Execution Guide

Both backend folders include a `test.http` file containing structural test templates suitable for the VS Code REST Client extension.

### Running BackendDemo (Port 3000)
1. Install dependencies:
   ```bash
   cd JS-ASSIGNMENTS/week-3/BackendDemo
   npm install
   ```
2. Start the server:
   ```bash
   node server.js
   ```

### Running BackendDemoUsingDB (Port 4000)
1. Ensure your local MongoDB Server is running on port 27017.
2. Navigate and install dependencies:
   ```bash
   cd JS-ASSIGNMENTS/week-3/BackendDemoUsingDB
   npm install
   ```
3. Start the database-connected server:
   ```bash
   node server.js
   ```

### Example Test Requests (test.http)
```http
### Get All Products
GET http://localhost:4000/product-api/products

### Create a New User
POST http://localhost:4000/user-api/user
Content-Type: application/json

{
  "username": "jeshwanth",
  "email": "jeshwanth@mern.dev",
  "age": 22
}
```
