import React from "react";
import './personal-account-profil.css';

export const ProfilBlock = () => {
    return (
        <div class="container">
            <div class="info">
            <div class="avatar-wrapper">
                <img class="profile-pic" src="" />
                <div class="upload-button">
                <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
                </div>
                <input class="file-upload" type="file" accept="image/*"/>
            </div>
            
            <h2>ArtX</h2>
            <a href="#modal_btn"><button class="btn">Редактировать профиль</button></a>
            </div>
            <div id="modal_btn" class="modal">
        <div class="modal_dialog">
          <div class="modal_content">
            <div class="modal_header">
              <h3 class="modal_title"><a href="#">Сменить пароль</a></h3>
              <h3 class="modal_title"><a href="#">Конфинденциальность и безопасность</a></h3>
              <h3 class="modal_title"><a href="#">Уведомления</a></h3>
              <h3 class="modal_title"><a href="#">Сообщить о проблеме</a></h3>
              <h3 class="modal_title"><a href="#">QR-Code</a></h3>
              <h3 class="modal_title"><a href="main.html">Выйти</a></h3>
              <h3 class="modal_title"><a href="#">Отмена</a></h3>
            </div>
          </div>
        </div>
      </div>
            <div class="info-text">
                <p>0 публикаций</p>
                <p>0 подписчиков</p>
                <p>0 подписки</p>
            </div>
        </div>
    )
}