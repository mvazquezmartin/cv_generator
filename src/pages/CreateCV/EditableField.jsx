import { useState, useEffect, useRef } from 'react';
import { SVG_delete } from '@/assets/svg';
import './EditableField.css';

export const EditableField = ({ value, onChange, onEnter }) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  const adjustHeight = (element) => {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      adjustHeight(inputRef.current);
    }
  }, [editing, value]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      setEditing(false);
      if (onEnter) {
        onEnter();
      }
    }
  };

  const handleChange = (e) => {
    onChange(e.target.value);
    adjustHeight(e.target);
  };

  return (
    <div className="editable-field-container">
      {editing ? (
        <div className="editable-field-editing">
          <textarea
            ref={inputRef}
            value={value}
            onChange={handleChange}
            onBlur={() => setEditing(false)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="editable-field-input"
            rows="1"
          />
        </div>
      ) : (
        <span className="editable-field-span" onClick={() => setEditing(true)}>
          {value}
        </span>
      )}
    </div>
  );
};
