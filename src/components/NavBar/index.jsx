import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import ImgPost from '../@assets/icons/post.png';
import ImgMessage from '../@assets/icons/message.png';
import ImgNot from '../@assets/IconsSettings/notifications.png';
import ImgSearch from '../@assets/icons/search.png';

import styles from './NavBar.module.scss';
import UserBadge from 'components/UserBadge';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'api/users';

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
    { path: '/account', icon: authUser.avatarUrl, className: styles.activeUser },
  ];

  const activeIndex = navItems.findIndex((item) => item.path === location.pathname);

  const onClickIconsNav = (index) => {
    const currentItem = navItems[index];

    if (currentItem.errorBlockIcons) {
      currentItem.errorBlockIcons();
    }
  };

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        {navItems.map((item, index) => (
          <Link key={index} to={item.path}>
            {item.icon && (
              <img
                onClick={() => onClickIconsNav(index)}
                className={`${activeIndex === index ? styles.active : ''} ${item.className || ''}`}
                src={item.icon}
                alt="imgNav"
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
