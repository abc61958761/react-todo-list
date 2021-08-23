import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { Button, Checkbox } from "antd";

let AddTodo = ({ dispatch }) => {
  const formatDeadline = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;

  const [title, setTitle] = React.useState("");
  const [deadline, setDeadline] = React.useState(formatDeadline);

  return (
    <div className="tw-flex tw-flex-col">
      <div>
        <div className="tw-flex tw-flex-col " style={{ width: "500px" }}>
          <div className="tw-flex tw-p-4 tw-items-center tw-bg-gray-400">
            {/* <Form.Check
              checked={checked}
              className="tw-mr-6"
              onChange={() => {
                setChecked(!checked);
              }}
              type="checkbox"
            /> */}
            <Checkbox
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              placeholder="Task Title"
              className="tw-mr-2"
            />

            <div className="tw-flex-grow"></div>
            {/* <Button>
              <PencilIcon className="tw-h-6 tw-w-6" />
            </Button> */}
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
            {/* <div className="tw-flex tw-flex-col">
              <label className="tw-flex">Command</label>
              <Form.Control
                value={command}
                onChange={(event) => {
                  setCommand(event.target.value);
                }}
                as="textarea"
                rows={3}
              />
            </div> */}
          </div>
          <div className="tw-flex tw-px-4 tw-py-4">
            <Button variant="outline-secondary" className="tw-flex-1 tw-mr-1">
              Cancel
            </Button>
            <Button
              variant="outline-secondary"
              className="tw-flex-1 tw-ml-1"
              onClick={() => dispatch(addTodo({ title, deadline }))}
            >
              Add Task
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
