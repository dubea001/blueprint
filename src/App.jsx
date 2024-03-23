import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from 'react-router-dom';
import React from 'react'
import MainLayout from '../src/Layouts/MainLayout';
import Homepage from '../src/Pages/Homepage';
import Getstartedpage from '../src/Pages/Getstartedpage';
import Aboutpage from '../src/Pages/Aboutpage';
import Services from '../src/Pages/Services';
import Reviewspage from '../src/Pages/Reviewspage';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
      <Route index element={<Homepage/>}/>
      <Route path='/getstarted' element={<Getstartedpage/>}/>
      <Route path='/about' element={<Aboutpage/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/reviews' element={<Reviewspage/>}/>
  </Route>
  )
);

const App = () => {

  return <RouterProvider router={router}/>


}

export default App