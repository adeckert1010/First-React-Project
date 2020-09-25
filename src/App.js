import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import MyInfo from './Components/MyInfo';
import NavBar from './Components/NavBar'

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <MyInfo/>
      <Footer/>
    </div>
  );
}

export default App;
