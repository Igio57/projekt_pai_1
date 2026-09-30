export default function BookList({ books }) {
  return (
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
  );
}
