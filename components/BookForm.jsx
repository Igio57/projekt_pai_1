import { useState } from "react";

export default function BookForm({ onSave }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("Fantasy");
  const [status, setStatus] = useState("unread");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("5");
  const [favorite, setFavorite] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const newBook = {
      id: Date.now(),
      title,
      author,
      genre,
      status,
      year: Number(year),
      rating: Number(rating),
      favorite,
    };

    onSave(newBook);

    setTitle("");
    setAuthor("");
    setGenre("Fantasy");
    setStatus("unread");
    setYear("");
    setRating("5");
    setFavorite(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dodaj książkę</h2>

      <input
        type="text"
        placeholder="Tytuł"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      />

      <select value={genre} onChange={(event) => setGenre(event.target.value)}>
        <option value="Fantasy">Fantasy</option>
        <option value="Kryminał">Kryminał</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Romans">Romans</option>
        <option value="Inne">Inne</option>
      </select>

      <div>
        <label>
          <input
            type="radio"
            value="read"
            checked={status === "read"}
            onChange={(event) => setStatus(event.target.value)}
          />
          Przeczytana
        </label>

        <label>
          <input
            type="radio"
            value="unread"
            checked={status === "unread"}
            onChange={(event) => setStatus(event.target.value)}
          />
          Nieprzeczytana
        </label>
      </div>

      <input
        type="number"
        placeholder="Rok wydania"
        value={year}
        onChange={(event) => setYear(event.target.value)}
      />

      <select
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      >
        <option value="1">1 ⭐</option>
        <option value="2">2 ⭐</option>
        <option value="3">3 ⭐</option>
        <option value="4">4 ⭐</option>
        <option value="5">5 ⭐</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={favorite}
          onChange={(event) => setFavorite(event.target.checked)}
        />
        Ulubiona
      </label>

      <button type="submit">Dodaj</button>
    </form>
  );
}
