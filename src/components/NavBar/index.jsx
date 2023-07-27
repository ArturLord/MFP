import React from 'react';

import { Link } from 'react-router-dom';

import ImgPost from '../@assets/icons/post.png';
import ImgMessage from '../@assets/icons/message.png';
import ImgNot from '../@assets/IconsSettings/notifications.png';

import styles from './NavBar.module.scss';
import UserBadge from 'components/UserBadge';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'api/users';

const NavBar = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);

  const errorBlockIcons = () => {
    alert('Эта страница пока не готова :(');
  };

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <nav className={styles.nav}>
        <div className={styles.navWrapper}>
          <Link to="/posts">
            <img src={ImgPost} alt="" />
          </Link>
          <Link>
            <img onClick={errorBlockIcons} src="img/icons/search.png" alt="" />
          </Link>
          <Link to="/messages">
            <img src={ImgMessage} alt="" />
          </Link>
          <Link>
            <img onClick={errorBlockIcons} src={ImgNot} alt="" />
          </Link>
          <Link to="/account">
            <UserBadge avatarUrl={authUser.avatarUrl} />
          </Link>
        </div>
    </nav>
  );
};

export default NavBar;
