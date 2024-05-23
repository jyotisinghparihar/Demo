// import logo from './logo.svg';
// import './App.css';
// import HomePage from './Home.js'



// function App() {
//   return (
//     <div className="App">
//       <HomePage/>
      
    
     

      
//     </div>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';
// import HomeStudent from './HomeStudent.js'



// function App() {
//   return (
//     <div className="App">
//       <HomeStudent/>
      
    
     

      
//     </div>
//   );
// }

// export default App;




// import logo from './logo.svg';
//  import './App.css';
//  import HomeTeacher from './HomeTeacher.js'



// function App() {
//   return (
//    <div className="App">
//      <HomeTeacher/>
      
    
     

      
//    </div>
//   );
// }

//  export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Main from './main';
import Attendance from './Attendance';
import Header from './home360'; // Import Header component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home360" element={<Header />} /> {/* Render Header component at /home360 */}
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/Attendance" element={<Attendance />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;




