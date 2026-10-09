export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Szukaj po tytule lub autorze..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
