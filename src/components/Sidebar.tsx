import React, { useState } from "react";
import { ImUsers } from "react-icons/im";
import { TbCameraPlus } from "react-icons/tb";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import { SlHourglass } from "react-icons/sl";
import { MdOutlineDashboard, MdOutlineFilePresent } from "react-icons/md";
import { IconType } from "react-icons/lib";
import { CgTrashEmpty } from "react-icons/cg";
import { IoMdAlarm } from "react-icons/io";
import { BsCollectionPlay } from "react-icons/bs";
import logoImg from "../assets/images/mainstack-logo.png";
import avatar from "../assets/images/avatar.png";
import "../App.css";
import { MenuProps } from "../interface/interface";

interface MenuItemProps {
  icon?: IconType;
  text: string;
  isActive?: boolean;
  badge?: string;
  onClick?: () => void;
}

const Sidebar: React.FC<MenuProps> = ({ isMenuOpen, toggleMenu }) => {
  const [activeItem, setActiveItem] = useState("home");

  const MenuItem: React.FC<MenuItemProps> = ({
    icon,
    text,
    isActive,
    onClick,
    badge,
  }: MenuItemProps) => (
    <li
      className={`py-2 cursor-pointer  
      sidebar
      `}
      onClick={onClick}
    >
      <div className="flex justify-between h-[38px]">
        {isActive ? (
          <div className="w-[4px] bg-[#FF5403] rounded-tr-lg rounded-br-lg"></div>
        ) : (
          <span></span>
        )}
        <span className="flex items-center text-[#56616B] flex-start w-[80%] space-x-2 px-4">
          {icon &&
            React.createElement(icon, {
              size: 20,
              className: `${onClick ? "text-base" : "text-[12px]"} ${
                isActive ? "text-[#FF5403]" : ""
              }`,
            })}
          <span className={`${isActive ? "text-[#FF5403]" : ""}`}>
            <span
              className={`${onClick ? "text-base text-bold" : "text-[12px]"}`}
            >
              {text}
            </span>
            {badge && (
              <span
                className={` rounded-full px-[5px] py-[2.5px] ml-10  text-xs ${
                  isActive
                    ? "text-[#FF5403] bg-[#ede0da]"
                    : "text-[#56616B] bg-[#EFF1F6]"
                }`}
              >
                {badge}
              </span>
            )}
          </span>
        </span>
      </div>
    </li>
  );

  return (
    <div
      className={`md-custom:w-[25%] w-0 sidebar overflow-y-auto ${
        !isMenuOpen ? "w-0" : "w-[300px] sm:w-full fixed md-custom:relative z-50 inset-0"
      }`}
    >
      {/* Menu button for small and medium devices */}
      <button
        className="block md-custom:hidden fixed z-50 right-0 top-0 mr-4 mt-4 text-gray-700 hover:text-gray-800 focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar container */}
      <aside
        className={`bg-white border-r-2 border-[#EFF1F6] h-screen md:w-auto flex flex-col justify-between`}
      >
        <div>
          {/* Logo */}
          <div className="flex sticky justify-end items-end w-auto p-4 mb-5">
            <div className="w-[80%]">
              <img src={logoImg} alt="Logo" className="h-10" />
            </div>
          </div>

          {/* Menu items */}
          <ul>
            <MenuItem
              icon={MdOutlineDashboard}
              text="Dashboard"
              isActive={activeItem === "home"}
              onClick={() => setActiveItem("home")}
            />
            <MenuItem
              icon={BiPencil}
              text="Item 1"
              isActive={activeItem === "item_1"}
              onClick={() => setActiveItem("item_1")}
            />
            <MenuItem
              icon={SlHourglass}
              text="Item 2"
              badge="6"
              isActive={activeItem === "item_2"}
              onClick={() => setActiveItem("item_2")}
            />
            <MenuItem
              icon={ImUsers}
              text="Item 3"
              isActive={activeItem === "item_3"}
              onClick={() => setActiveItem("item_3")}
            />
          </ul>

          <ul>
            {/* <li className="p-2 cursor-pointer">OTHERS 1</li> */}
            <MenuItem text="OTHERS 1" />
            <MenuItem
              icon={TbCameraPlus}
              text="Item 4"
              isActive={activeItem === "Item_4"}
              onClick={() => setActiveItem("Item_4")}
            />
            <MenuItem
              icon={CgTrashEmpty}
              text="Item 5"
              isActive={activeItem === "Item_5"}
              onClick={() => setActiveItem("Item_5")}
            />
          </ul>

          <ul>
            {/* <li className="p-2 cursor-pointer">OTHERS 1</li> */}
            <MenuItem text="OTHERS 2" />
            <MenuItem
              icon={BsCollectionPlay}
              text="Item 6"
              isActive={activeItem === "Item_6"}
              onClick={() => setActiveItem("Item_6")}
            />
            <MenuItem
              icon={MdOutlineFilePresent}
              text="Item 7"
              isActive={activeItem === "Item_7"}
              onClick={() => setActiveItem("Item_7")}
            />
            <MenuItem
              icon={IoMdAlarm}
              text="Item 8"
              isActive={activeItem === "Item_8"}
              onClick={() => setActiveItem("Item_8")}
            />
          </ul>
        </div>

        {/* User info */}
        <div className="flex items-center justify-end p-4 pb-10 mt-3">
          <div className="w-[80%] flex items-center justify-center ">
            <div className="flex items-center">
              <img
                src={avatar}
                alt="Avatar"
                className="h-8 w-8 mr-2 rounded-full"
              />
              <div>
                <p className="font-medium text-[15px] text-[#56616B]">
                  Blessing Daniels
                </p>
              </div>
            </div>
            <div className="ml-auto">
              <AiOutlineEllipsis size={24} className="text-gray-700" />
            </div>
          </div>
        </div>
      </aside>

      {/* Backdrop to close menu */}
      {/* {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50 z-40"
          onClick={toggleMenu}
        />
      )} */}
    </div>
  );
};

export default Sidebar;
