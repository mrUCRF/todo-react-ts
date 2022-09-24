import { Fragment } from "react";

export interface ITask {
  taskName: string;
}

export const Task: React.FC<ITask> = ({ taskName }) => {
  return (
    <Fragment>
      <td className="align-middle col-sm-6">
        <span className="m-2">{taskName}</span>
      </td>
    </Fragment>
  );
};
