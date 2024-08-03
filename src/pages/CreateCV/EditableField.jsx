import { useState } from 'react';

export const EditableField = ({ value, onChange, onEnter, type = 'text' }) => {
  const [editing, setEditing] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
      if (onEnter) {
        onEnter();
      }
    }
  };

  return (
    <div onClick={() => setEditing(true)}>
      {editing ? (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setEditing(false)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};
