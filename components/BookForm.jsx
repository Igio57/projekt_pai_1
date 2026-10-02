import { useState } from "react";

export default function BookForm({ onSave }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("Fantasy");
  const [status, setStatus] = useState("unread");

  function handleSubmit(event) {
    event.preventDefault();

    const newBook = {
      id: Date.now(),
      title: title,
      author: author,
      genre: genre,
      status: status,
    };

    onSave(newBook);

    setTitle("");
    setAuthor("");
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
      </select>

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

      <button type="submit">Dodaj</button>
    </form>
  );
}
