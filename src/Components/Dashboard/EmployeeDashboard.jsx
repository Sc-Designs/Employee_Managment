import React from 'react'
import Header from '../other/Header'
import TaskBoxCenter from '../other/TaskBoxCenter'
import { IoIosArrowUp } from "react-icons/io";
import TaskList from '../other/TaskList';

const EmployeeDashboard = (props) => {
  return (
    <div className="w-full min-h-screen bg-[#1C1C1C]">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskBoxCenter data={props.data} />
      <div className="flex justify-center w-full py-4 text-3xl text-white">
        <IoIosArrowUp />
      </div>
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard