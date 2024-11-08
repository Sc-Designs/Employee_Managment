import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  // localStorage.clear()
  const [User, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext);
  useEffect(()=>{
    const loggedinUser = localStorage.getItem('loggedInUser');
    if(loggedinUser){
      const user = JSON.parse(loggedinUser)
      setUser(user.role)
      setLoggedInUserData(user.data)
    }
  },[])

  const handelLogin = (email, password)=>{
    if(email == "admin@me.com" && password == "123"){
      setUser("admin")
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    }else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <>
      {!User ? <Login handelLogin={handelLogin} /> : ""}
      {User == "admin" ? (
        <AdminDashboard changeUser={setUser} data={"Suvam"} />
      ) : User == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
}

export default App