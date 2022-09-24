import { Fragment, useState } from "react";

const TaskHeader: React.FC = () => {
  return (
    <Fragment>
      <tr>
        <th scope="col">Status</th>
        <th scope="col">Task</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </Fragment>
  );
};

export default TaskHeader;
