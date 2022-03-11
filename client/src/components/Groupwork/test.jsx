//
//Capstone Project
//Array Bootcamp Fall 2021 -Spring 2022
//Katie Greenwald
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import './Groupwork.css'

class MemberBox extends Component {

    
  
  constructor(props) {

      let groupMemberArr = ["Person1", "Person2", "Person3", "Person4"];

    super(props);
    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0,
        y: 0
      },
      controlledPosition: {
        x: -400,
        y: 200
      }
    };
    this.handleDrag = this.handleDrag.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.adjustXPos = this.adjustXPos.bind(this);
    this.adjustYPos = this.adjustYPos.bind(this);
    this.onControlledDrag = this.onControlledDrag.bind(this);
    this.onControlledDragStop = this.onControlledDragStop.bind(this);
  }

  handleDrag(e, ui) {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  }

  onStart() {
    this.setState({ activeDrags: ++this.state.activeDrags });
  }

  onStop() {
    this.setState({ activeDrags: --this.state.activeDrags });
  }
  // For controlled component
  adjustXPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  }

  adjustYPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  }

  onControlledDrag(e, position) {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  }

  onControlledDragStop(e, position) {
    this.onControlledDrag(e, position);
    this.onStop();
  }
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;
    return (
      <div className='GroupBox'>
     
<div className='groupMember-list'>
{groupMemberArr.map((member,i) => (

<Draggable>
<p key={i}
className = "pill"
id= {`pill${i}`}
style ={{
    backgroundColor: 'red',
    color: 'white',
//     border: none,
    
//     padding: 5px 10px,
//     text-align: center,
//     text-decoration: none,
//     display: inline-block,
//     margin: 4px 2px,
//     cursor: pointer,
//     border-radius: 16px,
// 
}}
>
    {member}{} <br/>
</p>

</Draggable>
) ) }

</div>
      
   
     
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MemberBox />, rootElement);
