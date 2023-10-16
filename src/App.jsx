import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Favourites from "./pages/Favourites";
import Staking from "./pages/Staking";
import Price from "./pages/Price";
import Earning from "./pages/Earning";
import Withdrawal from "./pages/Withdrawal";
import Sidebar from "./components/Sidebar";
import ActiveUsers from "./pages/ActiveUsers";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex dark:bg-slate-800 dark dark:text-white ">
      <Sidebar className="dark:bg-slate-800" />
      <Navbar className="dark:bg-slate-800" />
      <Routes>
        <Route path="/" element={<Home className="dark:bg-slate-800" />} />
        <Route
          path="/login"
          element={<Login className="dark:bg-slate-800" />}
        />
        <Route
          path="/profile"
          element={<Profile className="dark:bg-slate-800" />}
        />
        <Route
          path="/activeusers"
          element={<ActiveUsers className="dark:bg-slate-800" />}
        />
        <Route
          path="/favourites"
          element={<Favourites className="dark:bg-slate-800" />}
        />
        <Route
          path="/staking"
          element={<Staking className="dark:bg-slate-800" />}
        />
        <Route
          path="/price"
          element={<Price className="dark:bg-slate-800" />}
        />
        <Route
          path="/earning"
          element={<Earning className="dark:bg-slate-800" />}
        />
        <Route
          path="/withdrawal"
          element={<Withdrawal className="dark:bg-slate-800" />}
        />
      </Routes>
    </div>
  );
};

export default App;
