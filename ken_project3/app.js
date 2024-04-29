const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// In-memory array to store book data
let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: '1984', author: 'George Orwell' }
];

// Read all books
app.get("/api/books", (req, res) => {
    res.json(books);
});

// Read a book using it specific id
app.get("/api/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});

// Update a book using its specific ID
app.put("/api/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex !== -1) {
        books[bookIndex] = { id, title, author };
        res.json({ message: `Book with ID ${id} has been updated` });
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});

// Create a new book
app.post("/api/books", (req, res) => {
    const { title, author } = req.body;
    const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1;
    const newBook = { id: newId, title, author };
    books.push(newBook);
    res.status(201).json({ message: "Book created successfully", book: newBook });
});

// Delete a book by ID
app.delete("/api/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.json({ message: `Book with ID ${id} has been deleted` });
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
