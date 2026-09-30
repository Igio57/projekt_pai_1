import React, { useState } from "react";
import booksData from "./data/Books.js";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState(booksData);

  return (
    <div>
      <h1>📚 BookShelf</h1>

      <button>+ Dodaj książkę</button>

      <h2>Moje książki</h2>

      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>Autor: {book.author}</p>
            <p>Gatunek: {book.genre}</p>
            <p>Rok: {book.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
