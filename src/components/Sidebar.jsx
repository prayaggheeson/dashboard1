import React, { useState, useEffect, useMemo } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import {
  FiMessageSquare,
  FiLogOut,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";

import { FaMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [menus, setMenus] = useState([
    {
      name: "User Dashboard",
      link: "/",
      icon: MdOutlineDashboard,
      isOpen: false,
    },
    { name: "Profile", link: "/profile", icon: AiOutlineUser, isOpen: false },
    { name: "Active Users", link: "/activeusers", icon: FiUsers },

    { name: "Staking", link: "/staking", icon: FiMessageSquare, isOpen: false },
    {
      name: "Current Price",
      link: "/price",
      icon: TbReportAnalytics,
      margin: true,
      isOpen: false,
      dropdown: [
        { name: "Option 1", link: "/price/option1" },
        { name: "Option 2", link: "/price/option2" },
        { name: "Option 3", link: "/price/option3" },
      ],
    },
    { name: "Earning", link: "/earning", icon: FaMoneyBillAlt, isOpen: false },
    {
      name: "Withdrawl",
      link: "/withdrawal",
      icon: FiShoppingCart,
      isOpen: false,
    },
    {
      name: "Favourite",
      link: "/favourites",
      icon: AiOutlineHeart,
      margin: true,
      isOpen: false,
      dropdown: [
        { name: "Option 1", link: "/favourites/option1" },
        { name: "Option 2", link: "/favourites/option2" },
        { name: "Option 3", link: "/favourites/option3" },
      ],
    },

    { name: "Logout", link: "/login", icon: FiLogOut, isOpen: false },
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isOpen) {
      setMenus((prevMenus) => {
        return prevMenus.map((menu) => {
          if (menu.dropdown) {
            menu.isOpen = false;
          }
          return menu;
        });
      });
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`bg-white sticky min-h-screen ${
          isOpen ? "w-72" : "w-16"
        } duration-500 text-black px-4`}
      >
        <div className="py-3 flex justify-center">
          <label className="btn btn-circle swap swap-rotate">
            <input type="checkbox" onClick={toggleDropdown} />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        <div className="mt-4 flex flex-col gap-2 relative">
          {menus?.map((menu, i) => (
            <div key={i} className="relative">
              <Link
                to={menu?.link}
                className={`${
                  menu?.margin && "mt-2"
                } group flex items-center text-lg gap-3 p-2 hover:bg-purple-500 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
              </Link>
              {menu.dropdown && (
                <div
                  className={`absolute left-16 top-0 mt-2 bg-gray-200 p-2 rounded-md shadow-md ${
                    isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                  }`}
                >
                  {menu.dropdown.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="block py-1 px-2 hover:bg-gray-300 rounded-md"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Sidebar;
