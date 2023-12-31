import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import ImgPost from '../@assets/icons/post.png';
import ImgMessage from '../@assets/icons/message.png';
import ImgNot from '../@assets/IconsSettings/notifications.png';
import ImgSearch from '../@assets/icons/search.png';

import { useDispatch, useSelector } from 'react-redux';

import styles from './NavBar.module.scss';

const NavBar = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  const location = useLocation();

  const errorBlockIcons = () => {
    alert('Эта страница пока не готова :(');
  };

  const navItems = [
    { path: '/posts', icon: ImgPost },
    { path: '', icon: ImgSearch, errorBlockIcons },
    { path: '/messages', icon: ImgMessage },
    { path: '', icon: ImgNot, errorBlockIcons },
    { path: '/account', icon: authUser.avatarUrl, activeUser: styles.activeUser },
  ];

  const activeIndex = navItems.findIndex((item) => item.path === location.pathname);

  const onClickIconsNav = (index) => {
    const currentItem = navItems[index];

    if (currentItem.errorBlockIcons) {
      currentItem.errorBlockIcons();
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        {navItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <img
              onClick={() => onClickIconsNav(index)}
              className={`${activeIndex === index ? styles.active : ''} ${
                index === navItems.length - 1 && !authUser.avatarUrl ? item.activeUser : item.activeUser
              }`}
              src={item.icon}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
