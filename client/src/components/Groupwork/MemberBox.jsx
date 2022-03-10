import './Groupwork.css'
import React from 'react'



 function MemberBox() {

let groupMemberArr = ["Person1", "Person2", "Person3", "Person4"];
  return (
    <div className='GroupBox'>
        {/* <script src="gwScript.js"></script> */}
        GroupBox
<div className='groupMember-list'>
{groupMemberArr.map((member,i) => (

<p key={i}
className = "pill"
>{member}{} <br/>
</p>
) ) }
</div>
        
    </div>
  )
}
export default MemberBox; 