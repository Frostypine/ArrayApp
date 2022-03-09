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

let studentArr = ["Alex", "Anthony", "Bowen", "Dustin", "Ethan", "Katie", "Shawn", "Steve", "Taylor", "Trevor", "Rison", "Solomon"];


//create student list box
let studentList = document.querySelector(".student-list")

for (let i = 0; i < studentArr.length; i++) {
  let studentPill = document.createElement("a")
  studentPill.draggable = "true";
  studentPill.setAttribute("ondragstart", "drag(event)");
  studentPill.id = `drag${i}`
  studentPill.classList.add('pill');
  //if students become users then instead of random...
  let bgColor = Math.floor(Math.random()*16777215).toString(16)
  studentPill.style.backgroundColor = `#${bgColor}`;
  studentPill.classList.add(`${studentArr[i]}`)
  studentPill.innerHTML = `${studentArr[i]}`
  studentList.appendChild(studentPill)
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
    let student = e.dataTransfer.getData("name");
    e.target.appendChild(document.getElementById(data));
    let slot = e.target.id
    console.log(slot)
    let cal = `${student}Calendar`
    cal = new Calendar(student, slot)
    if (e.target.tagName !== "DIV") {
      calArr.push(cal)}
      else {
        calArr.pop(cal)
      }
    calendarUpload();
    (e.target.tagName !== "DIV")? printSchedule(slot, student):printRetraction()
  }
}

//create schedule message

function printSchedule(slot, student) {
  let task
  let dueDate
  message = document.querySelector('#message')
  /*
  `${student} will take ${task[?].id} due at ${task[?].dueDate}`
  
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
  message.innerHTML = `${student} will take ${task} due at ${dueDate}`
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
    let studentName = document.querySelector(`.${updatedCalArr[i].name}`)
    let timeSlot = document.querySelector(`#${updatedCalArr[i].dueDate}`)
    console.log(updatedCalArr)
    timeSlot.appendChild(studentName)
  }
}
const init = () => {
  calendarDownload()
}

init();
