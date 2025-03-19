import express from 'express';
import mysql from 'mysql';
import cors from "cors";

const app = express();
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "project"
});

app.use(express.json());
app.use(cors());

// Home route
app.get("/", (req, res) => {
    res.json("Hey, this is Sruthi's backend");
});

// ✅ GET all books
app.get("/books", (req, res) => {
    const q = "SELECT * FROM books;";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});


// ✅ POST (Create) a new book
app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `author`, `desc`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.author,
        req.body.desc,
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Book created successfully", bookId: data.insertId });
    });
});

// ✅ PUT (Update) an existing book by ID
app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET title = ?, author = ?, `desc` = ? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.author,
        req.body.desc
    ];

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err);
        if (data.affectedRows === 0) return res.status(404).json({ message: "Book not found" });
        return res.json({ message: "Book updated successfully" });
    });
});


// ✅ DELETE a book by ID
app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        if (data.affectedRows === 0) return res.status(404).json({ message: "Book not found" });
        return res.json({ message: "Book deleted successfully" });
    });
});

app.listen(8080, () => {
    console.log("Backend is running on port 8080...");
});
