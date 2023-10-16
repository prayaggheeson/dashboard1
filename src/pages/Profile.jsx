import React from "react";
import { Router } from "react-router-dom";

const Profile = () => {
  const handleLogout = () => {
    Router.push('/login')
  };
  return (
    <div className="bg-slate-300 min-h-screen w-screen items-center justify-center pt-20 text-black">
      <div className="flex flex-col items-center ">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
            alt="Avatar"
          />
        </div>
        <h1 className="font-semibold text-2xl m-5">User Name</h1>
        <button className="btn btn-outline btn-error" onClick={handleLogout}>
          Logout
        </button>
        <p></p><br/>
        <a href="/"><button type='submit' class="btn btn-primary mt-6 ml-auto mr-auto px-8 font
        relative bg-blue-700 hover:bg-blue-900 cursor-pointer focus:z-10">Go to
        Dashboard</button></a>
        
      </div>

    </div>
  );
};

export default Profile;
