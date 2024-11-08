import React, { useContext, useEffect, useState } from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { AuthContext } from '../../Context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  
  const [title, settaskTitle] = useState("");
  const [date, setdate] = useState("")
  const [asign, setasign] = useState("")
  const [category, setcategory] = useState("");
  const [description, setdesc] = useState("")

  const [newTask, setNewTask] = useState({})
  
  const submitHandeler = (e)=>{
    e.preventDefault()
    setNewTask({
      title,
      date,
      category,
      description,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });
    const data = userData
    
    data.forEach((employee)=>{
      if(asign === employee.name){
        employee.tasks.push(newTask)
        employee.taskNumbers.newTask = employee.taskNumbers.newTask+1;
      }
    })
    setUserData(data)
    
    console.log(data)
    settaskTitle("")
    setdate("")
    setasign("")
    setcategory("")
    setdesc("")
  }
  
  
  return (
    <form
      onSubmit={(e) => {
        submitHandeler(e);
      }}
      className=" flex px-4 py-2 gap-x-6 rounded-xl w-[98%] mx-auto mt-1 bg-zinc-800">
      <div className="flex flex-col w-full">
        <h1 className="flex items-center gap-1 mb-4 text-3xl font-bold">
          <IoArrowBackCircleOutline />
          <span className="mb-1">Create Task</span>
        </h1>
        <label htmlFor="Task">Task Title</label>
        <input
          value={title}
          onChange={(e) => settaskTitle(e.target.value)}
          type="text"
          id="Task"
          name="task"
          placeholder="Task Title"
          className="h-12 p-2 mt-2 mb-2 text-white rounded outline-none bg-zinc-700"
          // required
        />
        <label htmlFor="date">Date</label>
        <input
          value={date}
          onChange={(e) => setdate(e.target.value)}
          type="date"
          id="date"
          name="date"
          placeholder="Date"
          className="h-12 p-2 mt-2 mb-2 text-white rounded outline-none bg-zinc-700"
          // required
        />
        <label htmlFor="Assign">Assign To</label>
        <input
          value={asign}
          onChange={(e) => setasign(e.target.value)}
          type="text"
          id="Assign"
          name="assign"
          placeholder="Assign To"
          className="h-12 p-2 mt-2 mb-2 text-white rounded outline-none bg-zinc-700"
          // required
        />
        <label htmlFor="Category">Category</label>
        <input
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          type="text"
          id="Category"
          name="category"
          placeholder="Category"
          className="h-12 p-2 mt-2 mb-5 text-white rounded outline-none bg-zinc-700"
          // required
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="Description">Task Description</label>
        <textarea
          value={description}
          onChange={(e) => setdesc(e.target.value)}
          id="Description"
          name="description"
          placeholder="Description"
          className="h-full p-2 mt-2 mb-5 text-white rounded outline-none resize-none bg-zinc-700"
          // required
        ></textarea>
        <button
          type="submit"
          className="px-4 py-4 mt-5 font-bold text-white rounded bg-zinc-900 active:bg-zinc-700">
          Create Task
        </button>
      </div>
    </form>
  );
}

export default CreateTask