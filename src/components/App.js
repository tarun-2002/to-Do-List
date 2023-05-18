import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import ToDo from "./ToDo";
import CreatetoDo from "./CreatetoDo";

function App() {
  const [toDoTasks, setTask] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);

  function addTask(newTask) {
    setTask(lastTask => {
      return [...lastTask, newTask];
    });
    setFilteredTasks(lastTask => {
      return [...lastTask, newTask];
    });
  }

  function deleteTask(id) {
    setTask(lastTask => {
      return lastTask.filter((taskItem, index) => {
        return index !== id;
      });
    });
  }

  function handleSearchChange(event) {
    const { value } = event.target;
    setSearchTerm(value);
  }

  useEffect(() => {
    const filtered = toDoTasks.filter(task =>
      task.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, [toDoTasks, searchTerm]);

  return (
    <div className="home">
      <h1 className="heading">toDo List</h1>
      <div className="boxSearch">
        <input
          className="searchBox"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </div>
      <CreatetoDo onAdd={addTask} />
      {filteredTasks.map((taskItem, index) => {
        return (
          <ToDo
            key={index}
            id={index}
            content={taskItem.content}
            onDelete={deleteTask}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
