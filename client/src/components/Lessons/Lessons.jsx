
import '../Components.css'; 
import NewLesson from './NewLesson';
import {Link} from 'react-router-dom';

function Lessons () {
    return ( 
    <div className="lessons"
    ><br/>
        
         <div style={{
        background: 'wheat',
         border: `6px solid red` ,
         height: '30rem',
         width: '40rem',
         paddingTop: '0rem',
         color: 'red',
         }}>
             Lessons
             <br/>
             <Link to="/newlesson"> 
           new lesson
            </Link>

            
             </div>    {/* <NewLesson />  */}

    </div>
        );
}

export default Lessons;