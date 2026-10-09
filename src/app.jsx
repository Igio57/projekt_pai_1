import { useState } from "react";
import { initialBooks } from "./data/Books.js";
import BookList from "../components/BookList.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Filters from "../components/Filters.jsx";
import EmptyState from "../components/EmptyState.jsx";
import Pagination from "../components/pagination.jsx";

export default function App() {
  const [books, setBooks] = useState(initialBooks);

  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("title-asc");

  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 5;

  // wyszukiwanie + filtrowanie
  const filteredBooks = books.filter((book) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText);

    const matchesGenre = genreFilter === "all" || book.genre === genreFilter;

    const matchesStatus =
      statusFilter === "all" || book.status === statusFilter;

    return matchesSearch && matchesGenre && matchesStatus;
  });

  // sportowanie
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOrder === "title-asc") {
      return a.title.localeCompare(b.title);
    }

    if (sortOrder === "title-desc") {
      return b.title.localeCompare(a.title);
    }

    if (sortOrder === "year-asc") {
      return a.year - b.year;
    }

    if (sortOrder === "year-desc") {
      return b.year - a.year;
    }

    return 0;
  });

  // 3. paginacja
  const totalPages = Math.ceil(sortedBooks.length / booksPerPage);

  const startIndex = (currentPage - 1) * booksPerPage;

  const visibleBooks = sortedBooks.slice(startIndex, startIndex + booksPerPage);

  return (
    <div>
      <h1>📚 BookShelf</h1>

      <SearchBar value={search} onChange={setSearch} />

      <Filters
        genre={genreFilter}
        status={statusFilter}
        sortOrder={sortOrder}
        onGenreChange={setGenreFilter}
        onStatusChange={setStatusFilter}
        onSortChange={setSortOrder}
      />

      <h2>Moje książki</h2>

      {visibleBooks.length === 0 ? (
        <EmptyState />
      ) : (
        <BookList books={visibleBooks} />
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
