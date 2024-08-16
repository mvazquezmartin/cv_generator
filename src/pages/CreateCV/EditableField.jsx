import { useState, useEffect, useRef, useContext } from 'react';
import { SVG_delete } from '@/assets/svg';
import { CVContext } from '@/context/CVContext';
import './EditableField.css';

export const EditableField = ({
  value,
  onChange,
  onEnter,
  btn_delete = false,
  experienceIndex,
  taskIndex,
}) => {
  const { removeTask } = useContext(CVContext);
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

  const handleBlur = () => {
    setEditing(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    removeTask(experienceIndex, taskIndex);
  };

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
            {value || ' '}
          </span>
        )}
      </div>
    </div>
  );
};
