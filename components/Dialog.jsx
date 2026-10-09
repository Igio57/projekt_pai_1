export default function Dialog({ open, title, children, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <div className="dialog-backdrop">
      <div className="dialog">
        <button onClick={onClose}>✕</button>

        <h2>{title}</h2>

        {children}
      </div>
    </div>
  );
}
