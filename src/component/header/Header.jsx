import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const menuHundle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="">
      <div className="logo max-w-[30%]">
        <img
          src="public/image/Hikala-Logo.jpg"
          alt=""
          className="w-[150px] h-[120px]"
        />
      </div>
      <ul className="links flex items-center gap-4 w-[40%]">
        <li>
          <Link to="/">الرئيسية</Link>
        </li>
        <li>
          <Link to="about-us">من نحن</Link>
        </li>
        <li>
          <Link to="services">خدماتنا</Link>
        </li>
        <li>
          <Link href="">مشروعاتنا</Link>
        </li>
        <li>
          <Link to="contact">اتصل بنا</Link>
        </li>
      </ul>
      <div className="menu">
        <div onClick={menuHundle}>
          <IoMenu />
        </div>
        {showMenu && (
          <ul className="links-menu ">
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <li>
              <Link to="about-us">من نحن</Link>
            </li>
            <li>
              <Link to="services">خدماتنا</Link>
            </li>
            <li>
              <Link href="">مشروعاتنا</Link>
            </li>
            <li>
              <Link to="contact">اتصل بنا</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
