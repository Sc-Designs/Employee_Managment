import React from 'react'

const NewTask = ({task}) => {
  return (
    <div
      className={`text-white bg-orange-500 w-full p-4 rounded-t-xl -mt-1 pb-4`}>
      <div className="flex items-center justify-between mb-4">
        <p className="px-2 py-1 text-2xl font-semibold rounded-md bg-amber-700">
          {task.category}
        </p>
        <p>{task.date}</p>
      </div>
      <h2 className="text-4xl font-semibold">{task.title}</h2>
      <p className="text-xl tracking-wider">{task.description}</p>
      <div className="mt-4">
        <button className="px-2 py-1 text-sm rounded-md bg-amber-500">
          Accept Task
        </button>
      </div>
    </div>
  );
}

export default NewTask