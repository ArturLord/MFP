import React from "react";
import { Link } from "react-router-dom";
import './settings-page.css';

export const SettingsBlock = () => {
    return (
        <>
        <div className="header">
        <div className="logo">
          <Link to='/home'>My Favourite Pets</Link>
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
      <div className="settings_window">
          <div className="set_line">
              <ul>
              <li><a href="#">Редактировать профиль</a></li>
              <li><a href="#" onclick="document.getElementById('mytext').classList.add('opened');
                ">Сменить пароль</a></li>
              <li><a href="#">Конфинденциальность и безопасность</a></li>
              <li><a href="#">Уведомления</a></li>
              <li><a href="#">Сообщить о проблеме</a></li>
              <li><a href="#">Помощь</a></li>
              </ul>
          </div>
          <div className="set_line2" id="mytext">
            <div className="password">
              <div>
              <label htmlFor="text">Старый пароль</label>
              <input type="text" name="old_pass" id="old_pass"/>
              </div>
              <div>
              <label htmlFor="text">Новый пароль</label>
              <input type="text" name="new_pass" id="new_pass"/>
              </div>
              <div>
              <label htmlFor="text">Подтвердите пароль</label>
              <input type="text" name="pass" id="pass"/>
              </div>
              <div className="password_btn">
                <button>Сменить пароль</button>
              </div>
            </div>
          </div>
      </div>
      </>
    )
}
