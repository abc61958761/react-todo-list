import React from "react";
import { PencilIcon } from "@heroicons/react/solid";
import { Button, Checkbox, Input } from "antd";

const MyTasks = ({ todos, onTodoClick }) => {
  const [tasks, setTasks] = React.useState([]);
  const formatDeadline = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;

  const [checked, setChecked] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [command, setCommand] = React.useState("");
  const [deadline, setDeadline] = React.useState(formatDeadline);

  function addTask(command) {
    tasks.push(command);
    setTitle("");
    setChecked(false);
    setTasks([...tasks]);
  }
  const deleteTask = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  const onSelectCandidatesClick = (index, item) => {
    tasks[index].checked = !item;
    setTasks([...tasks]);
  };

  return (
    <div className="tw-flex tw-flex-col">
      {/* ========== Create Task ========== */}
      <div>
        <div className="tw-flex tw-flex-col " style={{ width: "500px" }}>
          <div className="tw-flex tw-p-4 tw-items-center tw-bg-gray-400">
            <Checkbox
              checked={checked}
              className="tw-mr-6"
              onChange={() => {
                setChecked(!checked);
              }}
              type="checkbox"
            />
            <Input
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              placeholder="Task Title"
              className="tw-mr-2"
            />

            <div className="tw-flex-grow"></div>
            <Button>
              <PencilIcon className="tw-h-6 tw-w-6" />
            </Button>
          </div>
          <div className="tw-border-b tw-border-solid tw-border-black tw-flex "></div>
          <div className=" tw-px-8 tw-py-4 tw-bg-gray-400">
            <div className="tw-flex tw-flex-col ">
              <label className="tw-flex">Deadline</label>
              <input
                type="date"
                value={deadline}
                onChange={(event) => {
                  setDeadline(event.target.value);
                }}
              ></input>
            </div>
            <div className="tw-flex tw-flex-col">
              <label className="tw-flex">Command</label>
              <Input
                value={command}
                onChange={(event) => {
                  setCommand(event.target.value);
                }}
                as="textarea"
                rows={3}
              />
            </div>
          </div>
          <div className="tw-flex tw-px-4 tw-py-4">
            <Button variant="outline-secondary" className="tw-flex-1 tw-mr-1">
              Cancel
            </Button>
            <Button
              variant="outline-secondary"
              className="tw-flex-1 tw-ml-1"
              onClick={() => addTask({ title, command, deadline, checked })}
            >
              Add Task
            </Button>
          </div>
        </div>
      </div>

      <div>
        {todos.map((task, index) => {
          return (
            <div className="tw-flex tw-items-center" key={index}>
              <input
                type="checkbox"
                name="vehicle1"
                checked={task.checked}
                onChange={() => onSelectCandidatesClick(index, task.checked)}
              />
              <div className="tw-text-left tw-w-full tw-p-4">
                <div>{task.title}</div>
                <div>{task.deadline}</div>
              </div>
              <div className="tw-flex">
                <Button
                  onClick={() => deleteTask(index)}
                  variant="outline-primary"
                  className="tw-w-20 tw-mr-2"
                >
                  刪除
                </Button>{" "}
                <Button>
                  <PencilIcon className="tw-h-5 tw-w-5" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyTasks;
