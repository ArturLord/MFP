import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SettingsBlock from '../components/SettingsBlock';
import Shelf from '../components/Hf-shelf';
import Footer from '../components/Footer';
import Header from 'components/Header';
import EditProfil from 'components/SettingsPages/EditProfil';
import ChangePassword from 'components/SettingsPages/ChangePassword';
import PrivacySecurity from 'components/SettingsPages/PrivacySecurity';
import Notifications from 'components/SettingsPages/Notifications';
import ReportProblem from 'components/SettingsPages/ReportProblem';
import Help from 'components/SettingsPages/Help';
import NavBar from 'components/NavBar';
import HeaderMobile from 'components/HeaderMobile';

const Settings = () => {
  const isMobile = window.innerWidth < 767;

  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<SettingsBlock />}>
            <Route index element={<EditProfil />} />
            <Route path="password" element={<ChangePassword />} />
            <Route path="privacy&security" element={<PrivacySecurity />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="report&problem" element={<ReportProblem />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Routes>
      </div>
      {isMobile && <NavBar />}
      <Shelf />
      <Footer />
    </>
  );
};

export default Settings;
