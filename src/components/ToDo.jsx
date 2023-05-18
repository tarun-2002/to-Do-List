import React from "react";

function ToDo(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <>
      <ul className="task-list">
        <li className="task-list-item">
          <label className="task-list-item-label">
            <input type="checkbox" />
            <span>{props.content}</span>
          </label>
          <span onClick={handleClick} className="delete-btn" title="Delete Task"></span>
        </li>
      </ul>
    </>
  );
}

export default ToDo;
