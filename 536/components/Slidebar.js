import React from "react";
import "./Slidebar.css";

function Slidebar() {
  return (
    <aside>
      <div className="sidebar">
        <div className="sidebar-items">
          <ul>
            <li className="sidebar-nav-item">
              <a href="#home">Component LifeCycle</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#home">LifeCycle API</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#about">Methods</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#work">Constructor()</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#clients">render()</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#">conponentDidMount()</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#">conponentDidUpdate()</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#">componentWillUnMount()</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#">shouldComponentUpdate()</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Slidebar;
