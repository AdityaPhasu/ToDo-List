import React, { useState } from "react";
import { ImBin } from "react-icons/im";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <div onClick={handleClick}>
        <li
          style={{
            textDecoration: isDone ? "line-through" : "none"
          }}
        >
          {props.item}
        </li>
      </div>
      <div className="right">
        <button
          className="delete-btn"
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          <ImBin />
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
