import React from "react";

const TaskBox = ({ number, title, color, text }) => {
  return (
    <div
      className={`${color} ${text} w-80 h-32 rounded-lg px-10 flex flex-col justify-center m-5`}>
      <h1 className="text-6xl font-black">{number}</h1>
      <p className="text-3xl font-semibold">{title}</p>
    </div>
  );
};

export default TaskBox;
