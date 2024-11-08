import React from 'react'

const Header = (props) => {

  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser('')
  }
  
  return (
    <div className="flex items-center justify-between w-full px-10 pt-2">
      <h1 className="font-mono text-3xl tracking-widest text-white">
        Hello, <br /> <span className="text-6xl">{props.data.name ? props.data.name : props.data}</span> 👋
      </h1>
      <button 
      onClick={logOut}
      className="px-5 py-2 text-xl font-semibold text-white bg-red-400 rounded text active:bg-red-500">
        LogOut
      </button>
    </div>
  );
}

export default Header;