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

      <BookList books={books} />
    </div>
  );
}
