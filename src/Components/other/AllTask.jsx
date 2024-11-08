import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div className="bg-[#1C1C1C] rounded my-4 pb-4 flex flex-col gap-y-3 mx-3 relative">
      <div className="sticky top-0 flex flex-col w-full py-4 gap-y-4 bg-[#1C1C1C]">
      <div className="flex justify-between px-4 py-2 mx-2 font-mono text-2xl font-semibold bg-red-400 rounded">
        <h2 className="w-1/5">Employee Name</h2>
        <h2 className="w-1/5">New Task</h2>
        <h2 className="w-1/5">Active Task</h2>
        <h2 className="w-1/5">Completed</h2>
        <h2 className="w-1/5">Failed</h2>
      </div>
      </div>
      {userData.map((employee) => {
        return (
          <div
            className="flex justify-between px-4 py-2 mx-2 text-2xl border-2 rounded border-emerald-400"
            key={employee.Id}>
            <h2 className="w-1/5 font-mono font-semibold">{employee.name}</h2>
            <h2 className="w-1/5 font-mono font-semibold text-blue-600">
              {employee.taskNumbers.newTask}
            </h2>
            <h2 className="w-1/5 font-mono font-semibold text-yellow-500">
              {employee.taskNumbers.active}
            </h2>
            <h2 className="w-1/5 font-mono font-semibold text-white">
              {employee.taskNumbers.completed}
            </h2>
            <h2 className="w-1/5 font-mono font-semibold text-red-600">
              {employee.taskNumbers.failed}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default AllTask;