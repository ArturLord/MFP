import React from 'react';
import SettingsBlock from '../components/SettingsBlock';
import Shelf from '../components/Hf-shelf';
import Footer from '../components/Footer';
import Header from 'components/Header';
import { Route, Routes } from 'react-router-dom';
import EditProfil from 'components/SettingsPages/EditProfil';
import ChangePassword from 'components/SettingsPages/ChangePassword';
import PrivacySecurity from 'components/SettingsPages/PrivacySecurity';
import Notifications from 'components/SettingsPages/Notifications';
import ReportProblem from 'components/SettingsPages/ReportProblem';
import Help from 'components/SettingsPages/Help';

const Settings = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
       <Routes>
        <Route path='/' element={ <SettingsBlock />}>
        <Route index  element={ <EditProfil />}/>
        <Route path='password' element={ <ChangePassword />}/>
        <Route path='privacy&security' element={ <PrivacySecurity />}/>
        <Route path='notifications' element={ <Notifications />}/>
        <Route path='report&problem' element={ <ReportProblem />}/>
        <Route path='help' element={ <Help />}/>
        </Route>
       </Routes>
      </div>
      <Shelf />
      <Footer />
    </>
  );
};

export default Settings;
