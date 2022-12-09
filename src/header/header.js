import React from "react";
import './header.css';

export const HeaderBlock = () => {
    return (
        <div className="header">
        <div className="logo">
          <h1>My Favourite Pets</h1>
        </div>
        <input type="search" id="search" placeholder="Поиск" />
        <nav className="nav">
          <a href="#" className="nav_link">&#128386;</a>
          <a href="#" className="nav_link">&#10084;</a>
          <div className="dropdown">
            <ul onclick="myFunction()" className="dropbtn">&#9937;</ul>
            <div id="myDropdown" className="dropdown-content">
              <a href="#">Профиль</a>
              <a href="settings.html">Настройки</a>
              <a href="#">Помощь</a>
              <a href="#">Выйти из аккаунта</a>
            </div>
          </div>
        </nav>
      </div>
    )
}