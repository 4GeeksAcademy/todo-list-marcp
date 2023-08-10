import React, { useState } from "react";

export default function Todos ({ task, index, onDelete }) {
    const [showDelete, setShowDelete] = useState(false);
  
    const handleMouseEnter = () => {
      setShowDelete(true);
    };
  
    const handleMouseLeave = () => {
      setShowDelete(false);
    };
  
    return (
      <li
        className="ps-3 text-start list-group-item"
        style={{ height: "50px" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {task}
        {showDelete && (
          <button type="button" onClick={() => onDelete(index)}>
            x
          </button>
        )}
      </li>
    );
  };