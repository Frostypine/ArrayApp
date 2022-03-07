import NewResource from "./NewResource";
import ResourceList from "./ResourceList";

function Resources () {
    return ( 
    <div className="resources">
        <br/>
    <div style={{
        background: 'wheat',
         border: `6px solid green` ,
         height: '30rem',
         width: '40rem',
         paddingTop: '0rem',
         color: 'green'
         }}>
            Resources
            <ResourceList/>
            <NewResource/>
             </div> 
    </div>
        );
}

export default Resources;