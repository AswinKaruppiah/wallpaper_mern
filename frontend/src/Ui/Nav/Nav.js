import { React, useState } from "react";
import "./Nav.css";
import wave from "./pngfind.com-ocean-wave-png-36751.png";
import close from "./close.svg";
import menu from "./menu.svg";

function Nav() {
  const [toggle, settoggle] = useState(true);
  return (
    <>
      <nav>
        <div className="logo">
          <img src={wave} alt="not found" />
          <h1>Autumn</h1>
        </div>

        <div className="lap-view">
          <ul>
            <li>
              <a href="/"> Home</a>
            </li>
            <li>
              <a href="/create">Add wallpaper</a>
            </li>
            <li>
              <a href="/admin/login">Admin login</a>
            </li>
            <li>
              <a href="/admin/adminpanel">Admin panel</a>
            </li>
          </ul>
        </div>
        <div className="mob-view">
          <img
            src={toggle ? menu : close}
            alt="menu"
            onClick={() => settoggle(!toggle)}
          />
          <div className={`${toggle ? "mob-listhidden" : "mob-listshow"}`}>
            <ul>
              <li>
                <a href="/"> Home</a>
              </li>
              <li>
                <a href="/create">Add wallpaper</a>
              </li>
              <li>
                <a href="/admin/login">Admin login</a>
              </li>
              <li>
                <a href="/admin/adminpanel">Admin panel</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
