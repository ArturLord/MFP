import React from 'react';

import Shelf from '../components/Hf-shelf';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProfilBlock from '../components/ProfilBlock';
import PhotoBlock from '../components/PhotoBlock';

import { AppContext } from '../App';
import ModalEditBlock from '../components/ModalEditBlock';

import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const PersonalAccount = ({photos}) => {
  const { user } = React.useContext(AppContext);
  const { visibleModalEdit, setVisibleModalEdit } = React.useContext(AppContext);
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {isAuth ? (
        <>
          <Header user={user} />
          <ModalEditBlock
            visibleModalEdit={visibleModalEdit}
            closeModal={() => setVisibleModalEdit(false)}
          />
          <div className="wrapper">
            {user
              ?.filter((obj) => obj.id === 1)
              .map((obj) => (
                <ProfilBlock
                  key={obj.id}
                  {...obj}
                  openModal={() => setVisibleModalEdit(true)}
                  setVisibleModalEdit={setVisibleModalEdit}
                />
              ))}
            <PhotoBlock  photos={photos} />
            <Shelf />
            <Footer />
          </div>
        </>
      ) : (
         navigate('/')
      )}
    </>
  );
};

export default PersonalAccount;
