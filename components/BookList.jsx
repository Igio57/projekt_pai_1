import BookItem from "./BookItem";

export default function BookList({ books }) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}
