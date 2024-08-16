import { useState, useEffect, useRef } from 'react';
import { SVG_delete } from '@/assets/svg';
import './EditableField.css';

export const EditableField = ({
  value,
  onChange,
  onEnter,
  btn_delete = false,
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  // Ajusta la altura del textarea
  const adjustHeight = (element) => {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      adjustHeight(inputRef.current);
    }
  }, [editing, value]);

  // Maneja la tecla Enter para finalizar la edición
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      setEditing(false);
      if (onEnter) {
        onEnter();
      }
    }
  };

  // Maneja el cambio de valor
  const handleChange = (e) => {
    onChange(e.target.value);
    adjustHeight(e.target);
  };

  // Maneja la salida del campo editable
  const handleBlur = () => {
    setEditing(false);
  };

  // Maneja el clic en el botón de eliminar
  const handleDelete = (e) => {
    e.stopPropagation();
    onChange('');
  };
  // const handleDeleteMouseDown = (e) => {
  //   e.preventDefault();
  //   console.log('test');
  //   handleDelete(e);
  // };

  return (
    <div className="editable-field-container">
      <div className="editable-field-wrapper">
        {editing ? (
          <div className="editable-field-editing">
            <textarea
              ref={inputRef}
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              autoFocus
              className="editable-field-input"
              rows="1"
            />
            {btn_delete && (
              <button
                className="editable-field-delete"
                onMouseDown={handleDelete}
              >
                <SVG_delete />
              </button>
            )}
          </div>
        ) : (
          <span
            className="editable-field-span"
            onClick={() => setEditing(true)}
          >
            {value || ' '} {/* Muestra un espacio si el valor está vacío */}
          </span>
        )}
      </div>
    </div>
  );
};
