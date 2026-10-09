export default function Filters({
  genre,
  status,
  sortOrder,
  onGenreChange,
  onStatusChange,
  onSortChange,
}) {
  return (
    <div className="filters">
      <select
        value={genre}
        onChange={(event) => onGenreChange(event.target.value)}
      >
        <option value="all">Wszystkie gatunki</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Kryminał">Kryminał</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Dystopia">Dystopia</option>
        <option value="Romans">Romans</option>
        <option value="Inne">Inne</option>
      </select>

      <select
        value={status}
        onChange={(event) => onStatusChange(event.target.value)}
      >
        <option value="all">Wszystkie statusy</option>
        <option value="read">Przeczytane</option>
        <option value="unread">Nieprzeczytane</option>
      </select>

      <select
        value={sortOrder}
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="title-asc">Tytuł A-Z</option>
        <option value="title-desc">Tytuł Z-A</option>
        <option value="year-asc">Rok rosnąco</option>
        <option value="year-desc">Rok malejąco</option>
      </select>
    </div>
  );
}
