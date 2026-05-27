# Jeshwanth MERN Stack Developer Path

Welcome to my personal MERN (MongoDB, Express.js, React, Node.js) development repository. This repository acts as a comprehensive log of my progress, building from fundamental JavaScript constructs up to robust, database-driven REST API architectures and complete full-stack web platforms.

---

## Repository Blueprint

At the core of the repository lies the structured learning tracks. Currently, the major modules are divided as follows:

```
jeshwanth-mern/
│
└── JS-ASSIGNMENTS/         # Centralized Javascript assignments & backend APIs
    ├── week-1/             # Operators, Control Statements, and Arrays (Adv & Basics)
    ├── week-2/             # Reference Types, Date Methods, ToDo Systems, Domain Logic
    ├── week-3/             # Node REST APIs (In-Memory) & MongoDB-Mongoose Schema Design
    └── week-4/             # Secure Authentication, Custom Middleware & relational Mongoose models
```

---

## Assignment Navigator

| Module | Core Learning Focus | Deliverables | Status |
| :--- | :--- | :--- | :--- |
| [Week 1](JS-ASSIGNMENTS/week-1/) | Core JS Syntax & Array Methods | Operators, control loops, arrays, objects manipulation | Completed |
| [Week 2](JS-ASSIGNMENTS/week-2/) | Advanced JS & Domain Logic | Date parsing, Shallow vs Deep copying, Modular TODO app | Completed |
| [Week 3](JS-ASSIGNMENTS/week-3/) | REST APIs & DB Integration | Express.js controllers, MongoDB native/Mongoose CRUD | Completed |
| [Week 4](JS-ASSIGNMENTS/week-4/) | Secure APIs & Middleware | JWT authentication, Token validation, E-commerce APIs | Completed |

---

## Getting Started & Local Setup

To test, run, and experiment with these assignments locally:

### 1. Clone the repository
```bash
git clone https://github.com/Jeshwanth-Reddy05/jeshwanth-mern.git
cd jeshwanth-mern
```

### 2. Run Javascript Assignments (Weeks 1 & 2)
Assignments in Weeks 1 and 2 run on standard Node.js without heavy configurations.
```bash
# E.g. running week-1 bank transaction assignment
node JS-ASSIGNMENTS/week-1/arrayAdvOperations/bank-transaction.js
```

### 3. Run Backend Servers (Weeks 3 & 4)
Backend directories contain Express modules that need dependency installs.
```bash
# Navigate to a specific server directory
cd JS-ASSIGNMENTS/week-3/BackendDemo
npm install
npm run dev    # Or node server.js
```

---

## Requirements & Tech Stack
* Runtime: Node.js (Recommended: v16+ or v18+)
* Package Manager: NPM (Bundled with Node.js)
* Database: MongoDB Community Server (Local) or MongoDB Atlas (Cloud)
* API Client: VS Code REST Client (or Postman) for running the .http test files.

---

## About
Developed by Jeshwanth Reddy. Continually advancing through full-stack MERN capabilities to engineer fast, scalable, and responsive web products.
