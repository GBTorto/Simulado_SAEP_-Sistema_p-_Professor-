import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Login from "./pages/Login";
import TelaTurmas from './pages/TelaTurmas';
import CriarTurmas from './pages/CriarTurmas';
import CriarAtividade from './pages/CriarAtividade';
import TelaAtividade from './pages/TelaAtividade';

const App = () => {
  return (
    < BrowserRouter >

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/TelaTurmas' element={<TelaTurmas />}/>
        <Route path='/CriarTurmas' element={<CriarTurmas />} />
        <Route path='/CriarAtividade' element={<CriarAtividade />} />
        <Route path='/TelaAtividade' element={<TelaAtividade />} />
      </Routes>

    </ BrowserRouter >
  );
};

export default App
