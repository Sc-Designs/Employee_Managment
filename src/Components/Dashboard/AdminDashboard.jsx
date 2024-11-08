import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';

const AdminDashboard = (props) => {
  return (
    <div className="w-full text-white min-h-[125vh]">
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;