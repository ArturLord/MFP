import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <Link to="#">О нас</Link>
        <Link to="#">Пользователю</Link>
        <Link to="#">Топ-Профили</Link>
        <Link to="#">Вакансии</Link>
        <Link to="#">Поддержка проекта</Link>
        <Link to="#">Новости</Link>
        <Link to="#">Помощь</Link>
      </nav>
    </footer>
  );
};

export default Footer;
