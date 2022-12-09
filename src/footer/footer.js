import React from "react";
import {Link} from 'react-router-dom';
import './footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <Link to='#' className="nav-footer">О нас</Link>
                <Link to='#' className="nav-footer">Пользователю</Link>
                <Link to='#' className="nav-footer">Топ-Профили</Link>
                <Link to='#' className="nav-footer">Вакансии</Link>
                <Link to='#' className="nav-footer">Поддержка проекта</Link>
                <Link to='#' className="nav-footer">Новости</Link>
                <Link to='#' className="nav-footer">Помощь</Link>
            </nav>
        </footer>
    )
}