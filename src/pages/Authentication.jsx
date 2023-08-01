import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Login from './Login';
import Registration from './Registration';

const Authentication = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      </Routes>
    )
  }
export default Authentication