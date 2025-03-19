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
