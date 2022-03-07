import ReactTooltip from 'react-tooltip';

import React from 'react';
import { useSelector } from "react-redux";
import { selectResources } from "../../state/resourceSlice";

import './Resource.css'; 


 function ResourceList() {
 const Resources = useSelector(selectResources);

  return (
    <div className='resource-list'>
    



      {Resources.map((data, i)=> {
        return (
          <div
          
          key={`resource${i}`}
         
          > 
        <a href={`${data.url}`}
       data-tip= {`${data.whatfor}`} >
         {`${data.name}`}
          </a>
<ReactTooltip place="top" type="success" effect="float"/>

          </div> 
       );
      })}

      </div>
  );
}

export default ResourceList; 