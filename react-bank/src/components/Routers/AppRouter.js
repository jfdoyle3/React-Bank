import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from "../Navbar/NavBar";


const AppRouter = () => {

  return (
    <div>

        
        <Routes>
          <Route path="/" element={<Account />} />

        </Routes>
      </div>
   
  )
}

export default AppRouter;