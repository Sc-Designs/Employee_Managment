import React from 'react'
import TaskBox from './TaskBox';

const TaskBoxCenter = ({data}) => {
  return (
    <div className="flex flex-wrap justify-between w-full px-10 mt-10">
      <TaskBox
        number={data.taskNumbers.newTask}
        title={"New Task"}
        color={"bg-blue-400"}
        text={"text-white"}
      />
      <TaskBox
        number={data.taskNumbers.completed}
        title={"Completed Task"}
        color={"bg-lime-500"}
        text={"text-white"}
      />
      <TaskBox
        number={data.taskNumbers.active}
        title={"Accepted Task"}
        color={"bg-yellow-400"}
        text={"text-black"}
      />
      <TaskBox
        number={data.taskNumbers.failed}
        title={"Failed Task"}
        color={"bg-amber-700"}
        text={"text-white"}
      />
    </div>
  );
}

export default TaskBoxCenter