export default function BookItem({ book }) {
  return (
    <div>
      <h3>{book.title}</h3>

      <p>Autor: {book.author}</p>
      <p>Gatunek: {book.genre}</p>
      <p>Rok: {book.year}</p>
      <p>Ocena: {"*".repeat(book.rating)}</p>

      <p>Status: {book.status === "read" ? "Przeczytana" : "Nieprzeczytana"}</p>

      {book.favorite && <p> Ulubiona</p>}
    </div>
  );
}
