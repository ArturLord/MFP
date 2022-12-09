import React from "react";
import './edit-account.css';

export const EditAccount = () => {
    return (
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
    )
}