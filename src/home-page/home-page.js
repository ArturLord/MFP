import React from 'react';
import './home-page.css';
import {Link} from 'react-router-dom';
import Cat from '../img/pictures-slide/cat.jpg';
import Dog from '../img/pictures-slide/dog.jpg';
import Hare from '../img/pictures-slide/hare.jpg';
import Fox from '../img/pictures-slide/fox.jpg';
import GooglePlay from '../img/icons/googleplay.png';
import AppStore from '../img/icons/appstore.png';
import IconVK from '../img/icons/icon-vk.png';

const PicturesSlide = () => {
    return (
        <div className="pictures-slide">
            <img src={Cat} alt='cat'/>
            <img src={Dog} alt='dog'/>
            <img src={Hare} alt='hare'/>
            <img src={Fox} alt='fox'/>
      </div>
    )
}

const UserLoginBlock = () => {
    return (
        <div className="user-login-block">
          <div className="logo">
            <h1>My Favourite Pets</h1>
          </div>
        <form action="">
          <div className="row">
            <div className="form-group">
              <input type="text" id="name" placeholder="Имя пользователя"/>
            </div>
            <div className="form-group">
              <input type="current-passowrd" id="password" placeholder="Пароль"/>
            </div>
          </div>
              <input className="btn" type="submit" value="Войти"/>
          <Link to='#'/>
        </form>
          <div className="in_vk">
            <Link to="https://vk.com" target="blank"><img src={IconVK} className="icon_vk" alt="icon_vk"/>Войти через Вконтакте</Link>
            <p>ИЛИ</p>
          <div id="regist">
            <Link to="#">Зарегистрируйтесь</Link>
          </div>
        </div>
        <div className="textp">
          <p>Скачать наше приложение можно</p>
        </div>
        <div className="app">
          <Link to="https://www.apple.com/ru/app-store/" target="blank">
            <img src={AppStore} alt="app_store"/>
        </Link>
          <Link to="https://store.google.com/account?pli=1">
            <img src={GooglePlay} alt="google_play"/>
        </Link>
        </div>
    </div>
    )
}

export {PicturesSlide, UserLoginBlock};
