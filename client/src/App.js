import './App.css';
import React from 'react'
import {Route, Routes} from "react-router-dom"; 
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Assignments from './components/Assignments/Assignments';
import Groupwork from './components/Groupwork/Groupwork';
import Lessons from './components/Lessons/Lessons';
import Resources from './components/Resources/Resources';


function App() {
  return (
<div className="App">
     <header className="App-header">
    {/*  */}<NavigationBar />
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/assignments" element={<Assignments/>} />
       <Route path="/groupwork"   element={<Groupwork/>} />
       <Route path="/lessons"     element={<Lessons/>} />
       <Route path="/resources" element={<Resources/>} />

     </Routes>

   </header>
    </div>
  );
}

export default App;
