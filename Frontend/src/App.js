import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import{LoginPage} from "./Routes/routes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ='/login' element={<LoginPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
