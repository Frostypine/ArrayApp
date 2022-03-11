//
//Capstone Project
//Array Bootcamp Fall 2021 -Spring 2022
//Katie Greenwald
import React, { useState } from "react";
import '../Components.css'
import { Container, Modal,Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
//import {useSelector} from 'react-redux'
//import { selectTasks } from "../../state/taskSlice";
//import './Task.css'
import { postTask } from "../../actions/taskActions";





function NewTask() {

    const [show, setShow] = useState(false);
    const handleShow = () => {
      setShow(true); 
    }
    const handleClose = () => setShow(false);

  const dispatch = useDispatch();
  //const tasks = useSelector(selectTasks);
  const [name, setName] = useState("");
  const [info, setFor] = useState("");
  const [duedate, setURL] = useState("");
  const [id, setID] = useState("");

  const submitTask= (e) => {
    e.preventDefault();
    if (name === "") return alert("name cannot be empty");
    if (info === "") return alert("info cannot be empty");
    if (duedate === "") return alert("due date cannot be empty");
    //if (id !anumber) return alert("id has to be a number"); 
    //let task = tasks.find((e) => e.name === name);
    //if (task) return alert("name already exists");
    dispatch(
      postTask({
       id: id, 
       name: name,
       info: info,
       duedate: duedate,
        
      })
    );
  handleClose(); 
};

  return (
    <Container className="task-sign-up">
      <Modal show={show} onHide={handleClose}width="100rem">

      <Form
        onSubmit={(e) => {
          submitTask(e);
        }}
      >   <br/>  <br/>
  &nbsp; New Task 
        <Form.Group className="mb-3" >
          <InputGroup>
            <FormControl
              className="name-input"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
                  <FormControl
              className="id-input"
             // id="inlineFormInputGroupUsername"
              placeholder="id"
              value={id}
              onChange={(e) => {
                setID(e.target.value);
              }}
            />
          </InputGroup>
        </Form.Group>
        {/* <br /> */}
        <Form.Group className="mb-3" >
          <Form.Control
            className="info-input"
            placeholder="info"
            value={info}
            onChange={(e) => {
              setFor(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control //as="textarea"
            className="duedate-input"
            placeholder="due date"
            value={duedate}
            onChange={(e) => {
              setURL(e.target.value);
            }}
          />
        </Form.Group>
   
        <Button variant="green" type="submit"
       style={{height:'3rem', background: '',borderRadius:'15%', border: `3px solid white`,
        }}
        >
          submit
        </Button>
      </Form>
   </Modal>
   <br/><br/>
   <Button onClick={handleShow}>New Task</Button>
      
    </Container>
  );
}

export default NewTask;
