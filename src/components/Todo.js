import React, { PropTypes } from "react";

const Todo = ({ onClick, completed, title, deadline }) => (
  <>
    <div className="tw-flex tw-items-center">
      <div
        onClick={onClick}
        className="tw-text-left tw-w-full tw-p-4"
        style={{
          background: completed ? "#f2f2f2" : "none",
        }}
      >
        <div>{title}</div>
        <div>{deadline}</div>
      </div>
      {/* <div className="tw-flex">
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
      </div> */}
    </div>
  </>
);

// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Todo;
