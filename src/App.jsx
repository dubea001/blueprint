import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import MainLayout from '../src/Layouts/MainLayout';
import Homepage from '../src/Pages/Homepage';
import Getstartedpage from '../src/Pages/Getstartedpage';
import Aboutpage from '../src/Pages/Aboutpage';
import Services from '../src/Pages/Services';
import Reviewspage from '../src/Pages/Reviewspage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/blueprint/' element={<Homepage />} />
          <Route path='/blueprint/getstarted' element={<Getstartedpage />} />
          <Route path='/blueprint/about' element={<Aboutpage />} />
          <Route path='/blueprint/services' element={<Services />} />
          <Route path='/blueprint/reviews' element={<Reviewspage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
