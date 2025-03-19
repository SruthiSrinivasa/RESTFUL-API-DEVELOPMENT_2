# RESTFUL-API-DEVELOPMENT_2
**COMPANY**: CODTECH IT SOLUTIONS PVT.LTD

**NAME**: SRUTHI S

**INTERN ID**: CT2MTOEU

**DOMAIN**: SOFTWARE DEVELOPMENT

**BATCH DURATION**: January 22nd, 2025 to March 22nd, 2025.

**MENTOR NAME**: NEELA SANTHOSH

# Task Description: Design a RESTful API for a Library with CRUD Operations
This task involves designing and implementing a RESTful API for managing a Library System. The API will allow users to Create, Read, Update, and Delete (CRUD) book or inventory records. The system ensures seamless management of resources by providing structured endpoints for interaction.

# What This API Does:
Stores book details (title, author, description, etc.).
Provides endpoints to retrieve all records or search specific ones.
Allows updating existing records when information changes.
Enables deletion of records when items are removed from the system.
# Languages & Technologies Used:
Backend: Node.js with Express.js (for API development)
Database: MySQL (for data storage)
Testing Tools: Postman  (for API testing)
# Key Features of the API:
✅ GET /books - Fetch all books/inventory items.
✅ POST /books - Add new books/items to the database.
✅ PUT /books/:id - Update book/item details.
✅ DELETE /books/:id - Remove books/items from the system.

 # structure
D:\reactJs\books\backend
│── node_modules/         # Installed dependencies
│── index.js              # Main server file
│── package.json          # Project metadata
│── package-lock.json     # Dependency lock file

# Step-by-Step Setup

1. Create the Project Directory
mkdir D:\reactJs\books\backend
cd D:\reactJs\books\backend

2. Initialize the Project
npm init -y

3. Install Required Dependencies
npm install express mysql cors
npm install

4. npm start

# API Endpoints & Postman Commands

✅ 1. GET All Books (Retrieve All Records)
Endpoint: GET http://localhost:8080/books
Postman Request:
Method: GET
Headers: None
Body: None

✅ 2. POST (Create a New Book Record)
Endpoint: POST http://localhost:8080/books
Postman Request:
Method: POST
Headers:Content-Type: application/json
Body (Raw, JSON Format):
{
  "title": "enter somthing..",
  "author": "....",
  "desc": "...."
}

✅ 3. PUT (Update an Existing Book Record)
Endpoint: PUT http://localhost:8080/books/5 (Replace 5 with the book ID to update)
Postman Request:
Method: PUT
Headers:Content-Type: application/json
Body (Raw, JSON Format):
{
  "title": "Updated Book Title...",
  "author": "Updated Author...",
  "desc": "Updated book description..."
}

✅ 4. DELETE (Remove a Book from the System)
Endpoint: DELETE http://localhost:8080/books/5 (Replace 5 with the book ID to delete)
Postman Request:
Method: DELETE
Headers: None
Body: None

![Image](https://github.com/user-attachments/assets/30292913-afa7-459d-b07c-19417918a526)


![Image](https://github.com/user-attachments/assets/76a52104-bccc-4c25-812c-39829a5880b0)


![Image](https://github.com/user-attachments/assets/6e0b47a9-5c3a-42f7-9632-c02afd7f7137)


![Image](https://github.com/user-attachments/assets/1642639b-2196-4e99-a885-19261a0f6f2f)


![Image](https://github.com/user-attachments/assets/5408e8ef-0b70-493f-8b0d-223c6157359b)

