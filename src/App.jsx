import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import MainLayout from '../src/Layouts/MainLayout';
import Homepage from '../src/Pages/Homepage';
import Getstartedpage from '../src/Pages/Getstartedpage';
import Aboutpage from '../src/Pages/Aboutpage';
import Services from '../src/Pages/Services';
import Reviewspage from '../src/Pages/Reviewspage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/getstarted' element={<Getstartedpage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/services' element={<Services />} />
          <Route path='/reviews' element={<Reviewspage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;






// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import React from 'react';
// import MainLayout from '../src/Layouts/MainLayout';
// import Homepage from '../src/Pages/Homepage';
// import Getstartedpage from '../src/Pages/Getstartedpage';
// import Aboutpage from '../src/Pages/Aboutpage';
// import Services from '../src/Pages/Services';
// import Reviewspage from '../src/Pages/Reviewspage';

// const App = () => {
//   return (
//     <BrowserRouter basename='/blueprint'>
//       <Routes>
//         <Route path='/' element={<MainLayout />}>
//           <Route path='/' element={<Homepage />} />
//           <Route path='/getstarted' element={<Getstartedpage />} />
//           <Route path='/about' element={<Aboutpage />} />
//           <Route path='/services' element={<Services />} />
//           <Route path='/reviews' element={<Reviewspage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
