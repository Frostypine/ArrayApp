import './App.css';
import React from 'react'
import {Route, Routes} from "react-router-dom"; 
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
<div className="App">
     <header className="App-header">
    {/*  */}<NavigationBar />
     <Routes>
       <Route path="/" element={<Home/>} />
     </Routes>

   </header>
    </div>
  );
}

export default App;
