import   './App.css';
import   React          from 'react'
import { Route, Routes} from 'react-router-dom'; 
import { useEffect }    from 'react';
import { useDispatch}   from 'react-redux';
import { getLessons }   from './actions/lessonActions';
import { getResources } from './actions/resourceActions';
import { getTasks}      from './actions/taskActions';
import   Home           from './components/Home';
import   Options        from './components/Options';
import   Assignments    from './components/Assignments/Assignments';
import   Groupwork      from './components/Groupwork/Groupwork';
import  Lessons         from './components/Lessons/Lessons';
import  Resources       from './components/Resources/Resources';
import  Navigation      from './components/Navigation'; 
import  Schedule        from './components/Assignments/Schedule';
import  LessonPage      from './components/Lessons/LessonPage';

//import User from "./components/User/User";
//import UserLogin       from './components/User/UserLogin';
//import NewLesson from './components/Lessons/NewLesson';



function App() {
  const dispatch  = useDispatch(); 
  useEffect(() => {
   dispatch(getLessons()) } , [] );

  useEffect(() => {
    dispatch(getResources()) } , [] );
    
    useEffect(() => {
      dispatch(getTasks()) } , [] );  

  return (
<div className="App">
  {/*  */}<Navigation/>
     <Routes>
       <Route path="/"            element={<Home/>} />
       {/* <Route path="/user/*" element={<User />} />
        <Route path="/login"       element={<UserLogin/>} /> 
        <Route path="/newlesson"     element={<NewLesson/>} />*/}
      
     <Route path="/lessons"     element={<Lessons/>} />
     <Route path="/lessons/page/:lessonid"     element={<LessonPage/>} />

       <Route path="/options"     element={<Options/>} />
       
       <Route path="/assignments" element={<Assignments/>} />
       <Route path="/schedule" element={<Schedule/>} />

       <Route path="/groupwork"   element={<Groupwork/>} />
      
       <Route path="/resources"   element={<Resources/>} />


     </Routes>

 
    </div>
  );
}

export default App;
