import { useState } from 'react';

import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

//components
import Login from './components/account/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header/>
      <div style={{marginTop: 60, marginBottom: 64}}>
        <Routes>
          <Route path='/login' element= {<Login />} />
          <Route path='/login' element= {<Home />} />       
        </Routes>
      </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
