import React from "react";
import { Button, Input, List } from "antd";

import { TaskContext } from "./MyTasks";
function Task() {
  const { task, index, editTask, deleteTask } = React.useContext(TaskContext);

  const [checked, setChecked] = React.useState(task.checked);
  const [title, setTitle] = React.useState(task.title);
  const [deadline, setDeadline] = React.useState(task.deadline);
  const [isEdit, setEdit] = React.useState(false);
  const [tempTitle, setTempTitle] = React.useState(task.title);
  const [tempChecked, setTempChecked] = React.useState(task.checked);

  const handleChangeChecked = () => {
    setTempChecked(!tempChecked);
  };
  const handleEditTask = () => {
    setTitle(tempTitle);
    setChecked(tempChecked);
    editTask(index, {
      checked: tempChecked,
      title: tempTitle,
      deadline,
    });
    setEdit(false);
  };
  const handleCancel = () => {
    setTempTitle(title);
    setTempChecked(checked);
    setEdit(false);
  };
  let button, view;
  if (!isEdit) {
    button = (
      <>
        <Button
          onClick={() => {
            setEdit(true);
          }}
          variant="outline-primary"
          className="tw-w-20 tw-mr-2"
        >
          編輯
        </Button>
        <Button
          onClick={() => deleteTask(index)}
          variant="outline-primary"
          className="tw-w-20 tw-mr-2"
        >
          刪除
        </Button>
      </>
    );
    view = (
      <div className="tw-text-left tw-w-full tw-p-4">
        <div>{title}</div>
        <div>{deadline}</div>
      </div>
    );
  } else {
    button = (
      <>
        <Button
          onClick={handleEditTask}
          variant="outline-primary"
          className="tw-w-20 tw-mr-2"
        >
          完成
        </Button>
        <Button
          onClick={handleCancel}
          variant="outline-primary"
          className="tw-w-20 tw-mr-2"
        >
          取消
        </Button>
      </>
    );

    view = (
      <Input
        value={tempTitle}
        onChange={(event) => {
          setTempTitle(event.target.value);
        }}
        placeholder="Task Title"
        className="tw-ml-4"
      />
    );
  }
  return (
    <List.Item>
      <input
        type="checkbox"
        name="vehicle1"
        disabled={!isEdit}
        checked={tempChecked}
        onChange={handleChangeChecked}
      />
      {view}
      <div className="tw-p-2">{checked ? "DONE" : "DOING"}</div>
      <div className="tw-flex">{button}</div>
    </List.Item>
  );
}

export default Task;
