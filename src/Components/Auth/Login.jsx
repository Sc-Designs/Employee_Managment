import React, { useState } from 'react'
import ParticleBackground from '../../Pages/Particals';
const Login = ({handelLogin}) => {
    const [Email , SetEmail] = useState('');
    const [Password , SetPassword] = useState('');
    const SubmitHandelar = (e)=>{
        e.preventDefault();
        handelLogin(Email, Password);
        SetEmail("");
        SetPassword("");
    }
  return (
    <div className="relative flex items-center justify-center w-full h-screen text-white">
        <ParticleBackground/>
      <div className="absolute rounded-full w-80 h-80 opacity-60 blur-lg top-20 right-96"></div>
      <form
      onSubmit={SubmitHandelar}
        action=""
        style={{ backdropFilter: "blur(5px)", background: "#ffe4c444" }}
        className="relative z-20 flex flex-col gap-y-5 w-[30vw] h-[35vw] rounded-3xl items-center justify-center px-10">
        <h1 className="text-4xl font-semibold uppercase">Login</h1>
        <input
        required
        placeholder='Enter your Email'
          type="email"
          value={Email}
          className="w-full text-xl transition-all duration-200 ease-linear bg-transparent border-b-4 outline-none h-14 border-zinc-800 focus:border-white placeholder:text-zinc-300"
          onInput={(e)=>{
            SetEmail(e.target.value);
          }}
        />
        <input
        required
        value={Password}
        placeholder='Enter your Password'
          type="password"
          className="w-full text-xl transition-all duration-200 ease-linear bg-transparent border-b-4 outline-none h-14 border-zinc-800 focus:border-white placeholder:text-zinc-300"
          onInput={(e)=>{
            SetPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          className="mt-[20%] bg-orange-100 rounded-xl w-[70%] py-2 text-black text-2xl">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login