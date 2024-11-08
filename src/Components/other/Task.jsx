import React from 'react'

const Task = ({ level, date, title, description, bg }) => {
  return (
    <div className={`text-white ${bg} w-full p-4 rounded-t-xl -mt-1 pb-4`}>
        <div className="flex items-center justify-between mb-4">
        <p className="px-2 py-1 text-2xl font-semibold rounded-md bg-amber-700">{level}</p>
        <p>{date}</p>
        </div>
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-xl tracking-wider">{description}</p>
    </div>
  );
};

export default Task;