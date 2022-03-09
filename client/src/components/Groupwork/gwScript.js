/*
const users? groupMembers?  = [
 {
     name: "kt",
     color: "blue",
 }
]
const tasks = [
    {
        id: "0",
        dueDate: "Wednesday",
        info: "Do the thing"
    }
]

*/

//create 'containers'

let calArr = [];
let updatedCalArr = [];
let checkArr = [];

function Calendar(name, dueDate) {
  this.name = name;
  this.dueDate = dueDate;
}

let groupMemberArr = ["Alex", "Anthony", "Bowen", "Dustin", "Ethan", "Katie", "Shawn", "Steve", "Taylor", "Trevor", "Rison", "Solomon"];


//create groupMember list box
let groupMemberList = document.querySelector(".groupMember-list")

for (let i = 0; i < groupMemberArr.length; i++) {
  let groupMemberPill = document.createElement("a")
  groupMemberPill.draggable = "true";
  groupMemberPill.setAttribute("ondragstart", "drag(event)");
  groupMemberPill.id = `drag${i}`
  groupMemberPill.classList.add('pill');
  //if groupMembers become users then instead of random...
  let bgColor = Math.floor(Math.random()*16777215).toString(16)
  groupMemberPill.style.backgroundColor = `#${bgColor}`;
  groupMemberPill.classList.add(`${groupMemberArr[i]}`)
  groupMemberPill.innerHTML = `${groupMemberArr[i]}`
  groupMemberList.appendChild(groupMemberPill)
}


// drag and drop functions
function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
  e.dataTransfer.setData("name", e.target.text);
}

function drop(e) {
  e.preventDefault();
  pillDrop(e);
}


//place pill
let pillDrop = (e) => {
  if (e.target.innerHTML === "" || e.target.tagName === "DIV") {
    let data = e.dataTransfer.getData("text");
    let groupMember = e.dataTransfer.getData("name");
    e.target.appendChild(document.getElementById(data));
    let slot = e.target.id
    console.log(slot)
    let cal = `${groupMember}Calendar`
    cal = new Calendar(groupMember, slot)
    if (e.target.tagName !== "DIV") {
      calArr.push(cal)}
      else {
        calArr.pop(cal)
      }
    calendarUpload();
    (e.target.tagName !== "DIV")? printSchedule(slot, groupMember):printRetraction()
  }
}

//create schedule message

function printSchedule(slot, groupMember) {
  let task
  let dueDate
  message = document.querySelector('#message')
  /*
  `${groupMember} will take ${task[?].id} due at ${task[?].dueDate}`
  
  */

  switch (slot) {
    case "task-1": 
      task = "Task 1";
      dueDate = "Wednesday";
      break;
    case "task-2":
      task = "Task 2";
      dueDate = "Wednesday";
      break;
    case "task-3":
      task = "Task 3";
      dueDate = "Thursday";
      break;
    case "task-4":
      task = "Task 4";
      dueDate = "Friday";
      break;
    default:
      break;
  }
  message.innerHTML = `${groupMember} will take ${task} due at ${dueDate}`
}

let printRetraction = () => {
  message = document.querySelector('#message')
  message.innerHTML = "no, they won't."
}


//file upload/download

const calendarDownload = event => {
  fetch('../files/calendar.text')
    .then(response => response.text())
    .then(data => {
      setCalendar(data)
      calArr = updatedCalArr
    }
    )
}

const calendarUpload = () => {
  calArr = updatedCalArr
  fetch('/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(calArr)
  })
}



const resetCalendar = () => {
  calArr = updatedCalArr
  fetch('/clear', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener('click', () => {
  resetCalendar()
  location.reload();
})

let setCalendar = (data) => {
  updatedCalArr = (JSON.parse(data));

  for (let i = 0; i < updatedCalArr.length; i++) {
    let groupMemberName = document.querySelector(`.${updatedCalArr[i].name}`)
    let timeSlot = document.querySelector(`#${updatedCalArr[i].dueDate}`)
    console.log(updatedCalArr)
    timeSlot.appendChild(groupMemberName)
  }
}
const init = () => {
  calendarDownload()
}

init();
