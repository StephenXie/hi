import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Highlight from "./components/Highlight";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Particle from "./components/Particle";
import Tilt from 'react-tilt'
function Todo() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(
      "https://www.stephenxie.com/api/todos/?format=json"
    );
    const data = await res.json();
    return data;
  };
  const addTask = async (task) => {
    const res = await fetch(
      "https://www.stephenxie.com/api/todos/?format=json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );

    const data = await res.json();

    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  };
  const deleteTask = async (id) => {
    await fetch(`https://www.stephenxie.com/api/todos/${id}`, {
      method: "DELETE",
    });
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="my-container flex-1">
      <Particle />
      <Header
        title="Todo List"
        imgLink="https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&dpr=2&h=125&w=210"
        descriptions="Drop down some notes or reminders for yourself by clicking on the button."
        button = {<Tilt className="Tilt" options={{ max : 15 }} ><Button
          color={showAddTask ? "red" : "blue"}
          text={showAddTask ? "Hide Add Task" : "Show Add Task"}
          onClick={() => setShowAddTask(!showAddTask)}
      /></Tilt>}
      >
        <Highlight color="blue" text="Todo" /> List
      </Header>

      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default withRouter(Todo);
