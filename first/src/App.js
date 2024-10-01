import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import BikeList from "./pages/BikeList/BikeList";
import BikeDetails from "./pages/BikeDetails/BikeDetails";



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/BikeList" element={<BikeList/>} />
         <Route path="/BikeDetails/:id" element={<BikeDetails/>} />
      </Routes>
    </Router>
  
  )
        
}

export default App;