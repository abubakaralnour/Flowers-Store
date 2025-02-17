import React, { useState, useEffect } from "react";

import {Link } from "react-router-dom";
import BtnSideNav from "./BtnSideNavComp/BtnSideNav";

const MxHBtnHNv = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [menuOpen, setMenuOpen] = useState(false);

  // Check screen width dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <>
          {/* Sidebar Toggle Button */}
          <button
            className="menu-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>

          {/* Sidebar Container */}
          <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <div className="head-side">
              <img
                className="close-btn"
                onClick={() => setIsSidebarOpen(false)}
                src="https://img.icons8.com/?size=30&id=EYnXuvqJDgzX&format=png&color=000000"
                alt="da"
              />

              <Link to="/">
                <img
                  src="https://i.imgur.com/BaLXCfa.jpeg"
                  alt="Logo"
                  className="logo-img-side"
                />
              </Link>
            </div>
            <div className="side-searchRoot">
              <Link to="/">
                {" "}
                <button className="side-search">
                  Log In / Sign Up to Save $7 on Every Delivery
                </button>
              </Link>
            </div>
            <BtnSideNav menuOpen={setMenuOpen}/>
          </div>

          {/* Overlay to close sidebar when clicking outside */}
          {isSidebarOpen && (
            <div
              className="overlay"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}
        </>
      )}
    </>
  );
};

export default MxHBtnHNv;
{
  /* <li>
                <Link to="/storelocation" onClick={() => setMenuOpen(false)}>
                <span>Nextday</span>
                <img src="Headimg/icons8-add-50.png" alt="add " className="add"/>
                </Link>
              </li>
              <li>
                <Link to="/storelocation" onClick={() => setMenuOpen(false)}>
                  <span>Occaasons</span>
                  <img src="Headimg/icons8-add-50.png" alt="add " className="add"/>
                </Link>
              </li>
              <li>
                <Link to="/storelocation" onClick={() => setMenuOpen(false)}>
                  <span>Peonies</span>
                  <img src="Headimg/icons8-add-50.png" alt="add " className="add"/>
                </Link>
              </li>
              <li>
                <Link to="/storelocation" onClick={() => setMenuOpen(false)}>
                  <span>Nextday</span>
                  <img src="Headimg/icons8-add-50.png" alt="add " className="add"/>
                </Link>
              </li>
              <li>
                <Link to="/storelocation" onClick={() => setMenuOpen(false)}>
                  <span>Sameday</span>
                  <img src="Headimg/icons8-add-50.png" alt="add " className="add"/>
                </Link>
              </li> <li>
            <Link to="/trackorder" onClick={() => setMenuOpen(false)}>
              <span>Valentine</span>
              <img src="Headimg/icons8-add-50.png" alt="add " className="add"/>
            </Link>
            </li>
              <li>
                <Link to="/storelocation" onClick={() => setMenuOpen(false)}>
                  <span>Subscriptons</span>
                  <img src="Headimg/icons8-add-50.png" alt="add " className="add"/>
                </Link>
              </li>
            </ul>
            <ul>
           
            <li>
            <Link to="/trackorder" onClick={() => setMenuOpen(false)}>
              <span>Account</span>
              <img src="Headimg/icons8-add-50.png" alt="add " className="add"/>
            </Link>
            </li>
            <li>
            <Link to="/trackorder" onClick={() => setMenuOpen(false)}>
              <span>Help</span>
              <img src="Headimg/icons8-add-50.png" alt="add " className="add"/>
            </Link>
            </li>
            <li>
            <Link to="/trackorder" onClick={() => setMenuOpen(false)}>
            <span>StoreLocation</span>
            <img src="Headimg/icons8-add-50.png" alt="add " className="add"/>
            </Link>
            </li> */
}
