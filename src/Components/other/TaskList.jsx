import React from 'react'
// import Task from './Task'
import AcceptTask from '../TaskList/AcceptTask';
import NewTask from '../TaskList/NewTask';
import CompleteTask from '../TaskList/CompleteTask';
import FailedTask from '../TaskList/FailedTask';

const TaskList = ({data}) => {
  console.log(data)
  return (
    <div className="flex flex-col w-full px-4 pt-2 overflow-y-auto h-96">
      {data.tasks.map((elem, index) =>{
        if (elem.active && !elem.newTask) {
          return <AcceptTask task={elem} key={index} />
        }
        if (elem.newTask || elem.active) {
          return <NewTask task={elem} key={index} />;
        }
        if (elem.completed && !elem.failed) {
          return <CompleteTask task={elem} key={index} />;
        }
        if (elem.failed || elem.completed) {
          return <FailedTask task={elem} key={index} />;
        }
      })}
    </div>
  );
}

export default TaskList