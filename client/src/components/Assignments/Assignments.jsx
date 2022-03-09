import {Link} from 'react-router-dom';
import AppCalendar from './Calendar/AppCalendar';
import './Assignments.css'; 
import { Container } from 'react-bootstrap';
function Assignments () {
    return ( 
    <div className="assignments">
        <br/>
    <div style={{
        background: 'wheat',
         border: `6px solid yellow` ,
         height: '34rem',
         width: '40rem',
         paddingTop: '0rem',
         color: 'orange'
         }}>
             Assignments<br/>
            <Link to="/schedule"> Schedule </Link>*{/* <br/> */}
            <Link to="/"> Syllabus </Link>
            <AppCalendar/>
             </div>
    </div>
        );
}

export default Assignments;