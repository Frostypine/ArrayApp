import NewResource from "./NewResource";
import ResourceList from "./ResourceList";
import {Link} from 'react-router-dom';

function Resources () {
    return ( 
    <div className="resources">
        <br/>
    <div style={{
        background: 'wheat',
         border: `6px solid green` ,
         height: '32rem',
         width: '40rem',
         paddingTop: '0rem',
         color: 'green'
         }}>
            Resources
            <ResourceList/><Link to=""> Lesson Quizzes</Link>
            <NewResource/>
            
             </div> 
    </div>
        );
}

export default Resources;