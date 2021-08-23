import React, { useState } from "react";
import { PencilIcon, SparklesIcon } from "@heroicons/react/solid";
import { Button, Input, Card, List } from "antd";
import { globalContext } from '../views/TodoList';
import Task from './Task';

export const TasksContext = React.createContext({});
export const TaskContext = React.createContext({});
function MyTasks() {
  const { tasks, setTasks } = React.useContext(globalContext);
  
  function addTask(command) {
    tasks.push(command);
    setTasks([...tasks]);
  }
  const deleteTask = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };
  const editTask = (index, task) => {
    tasks[index] = task;
    setTasks([...tasks]);
  };

  return (
    <TasksContext.Provider value={{ addTask }}>
      <div className="flex flex-col">
        <CreateTask addTask={addTask}></CreateTask>
        <List>
          {tasks.map((task, index) => {
            return (
              <TaskContext.Provider
                value={{ task, index, deleteTask, editTask }}
                key={index}
              >
                <Task ></Task>
              </TaskContext.Provider>
            );
          })}
        </List>
      </div>
    </TasksContext.Provider>
  );
}

function CreateTask() {
  const { addTask } = React.useContext(TasksContext);
  const formatDeadline = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;

  const [checked, setChecked] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [command, setCommand] = React.useState("");
  const [deadline, setDeadline] = React.useState(formatDeadline);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDeadline = (event) => {
    setDeadline(event.target.value);
  };
  const handleChangeCommand = (event) => {
    setCommand(event.target.value);
  };
  const handleChangeChecked = () => {
    setChecked(!checked);
  };
  const handlAddTask = () => {
    setTitle("")
    setChecked(false)

    addTask({ title, command, deadline, checked });
  };

  return (
    <Card className="tw-flex tw-flex-col " style={{ width: "500px" }}>
      <div className="tw-flex tw-p-4 tw-items-center">
        <input
          type="checkbox"
          name="vehicle1"
          checked={checked}
          onChange={handleChangeChecked}
          className="tw-mr-6"
        />
        <Input value={title} onChange={handleChangeTitle}></Input>
      </div>
      <div className=" tw-px-8 tw-py-4 tw-bg-gray-300">
        <div className="tw-flex tw-flex-col ">
          <label className="tw-flex">Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={handleChangeDeadline}
          ></input>
        </div>
        <div className="tw-flex tw-flex-col">
          <label className="tw-flex">Command</label>
          <textarea value={command} onChange={handleChangeCommand}></textarea>
        </div>
      </div>
      <div className="tw-flex  tw-px-4 tw-py-4">
        <Button variant="outline-secondary" className="tw-flex-1 tw-mr-1">
          Cancel
        </Button>
        <Button
          variant="outline-secondary"
          className="tw-flex-1 tw-ml-1"
          onClick={handlAddTask}
        >
          Add Task
        </Button>
      </div>
    </Card>
  );
}



export default MyTasks;
