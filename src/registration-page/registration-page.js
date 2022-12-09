import React from "react";
import { Link } from "react-router-dom";
import GooglePlay from '../img/icons/googleplay.png';
import AppStore from '../img/icons/appstore.png';
import IconVK from '../img/icons/icon-vk.png';
import './registration-page.css';

const RegistrationBlock = () => {
    return (
        <div className="registration-block">
            <div className="logo">
            <h1>My Favourite Pets</h1>
            </div>
            <div className="registration-p">
                <p>Скорее регистрируйся,чтобы смотреть самые свежие актуальные фото и видео</p>
            </div>
            <form action="">
            <div className="row">
                <div className="form-group">
                    <input type="text" id="name" placeholder="Моб.телефон или почта"/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="name" placeholder="Имя и фамилия"/>
                        </div>
                <div className="form-group">
            <input type="text" id="name" placeholder="Имя пользователя"/>
            </div>
            <div className="form-group">
            <input type="password" id="password" placeholder="Пароль"/>
            </div>
            </div>
            <a href="index.html"><input className="btn" type="submit" value="Продолжить"/></a>
            </form>
            <div className="in_vk">
            <Link to="https://vk.com" target="blank"><img src={IconVK} className="icon_vk" alt="icon_vk"/>Войти через Вконтакте</Link>
            </div>
            <div id="enter">
            <p>У Вас уже есть аккаунт?<a href="main.html">Войти</a></p>
            </div>
            <div className="textp">
            <p>Скачать наше приложение можно</p>
            </div>
            <div className="app">
            <Link to="https://www.apple.com/ru/app-store/" target="blank"><img src={AppStore} alt="app_store"/></Link>
            <Link to=""><img src={GooglePlay} alt="google_play"/></Link>
            </div>
    </div>
    )
}

export default RegistrationBlock;