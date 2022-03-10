import React from 'react';
import GroupBox from './TaskAssignment';

function Groupwork () {
    return ( 
    <div className="groupwork">
 <br/>
    <div style={{
        background: 'wheat',
         border: `6px solid blue` ,
         height: '34rem',
         width: '40rem',
         paddingTop: '0rem',
         color: 'blue'
         }}>
            Groupwork
            <GroupBox/>
            

       </div> 
    </div>
        );
}

export default Groupwork;