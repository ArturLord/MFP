import React from 'react';
import './app.css';
import {HomePage} from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import {SettingsPage} from '../pages/SettingsPage';
import { PersonalAccount } from '../pages/PersonalAccount';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return(
        <Router>
            <div className='app'>
            <Routes>
                <Route path='home' element={<HomePage/>}/>
                <Route path='registration' element={<RegistrationPage/>}/>
                <Route path='settings' element={<SettingsPage/>}/>
                <Route path='personal' element={<PersonalAccount/>}/>
            </Routes>
            </div>
        </Router>
    )
}
export default App;