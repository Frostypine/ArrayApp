
import React, { useState } from "react";

import { Container, Modal,Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectLessons } from "../../state/lessonSlice";
import { postLesson } from "../../actions/lessonActions";

import './Lesson.css'
import '../Components.css'




function NewLesson() {

    const [show, setShow] = useState(false);
    const handleShow = () => {
      setShow(true); 
    }
    const handleClose = () => setShow(false);

  const dispatch = useDispatch();
  //const lessons = useSelector(selectLessons);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [id, setID] = useState("");

  const submitLesson= (e) => {
    e.preventDefault();
    if (title === "") return alert("title cannot be empty");
    if (author === "") return alert("author cannot be empty");
    if (text === "") return alert("text cannot be empty");
    //let lesson = lessons.find((e) => e.title === title);
    //if (lesson) return alert("title already exists");
    dispatch(
      postLesson({
        title: title,
        author: author,
        text: text,
        id: id,
      })
    );
  handleClose(); 
};

  return (
    <Container className="lesson-sign-up">
      <Modal show={show} onHide={handleClose}width="100rem">

      <Form
        onSubmit={(e) => {
          submitLesson(e);
        }}
      >   <br/>  <br/>
  &nbsp; New Lesson 
        <Form.Group className="mb-3" >
          <InputGroup>
            <FormControl
              className="title-input"
              placeholder="create title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
                  <FormControl
              className="id-input"
              id="inlineFormInputGroupUsername"
              placeholder="give id"
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
            className="author-input"
            placeholder="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control as="textarea"
            className="text-input"
            placeholder="enter content"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
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
   <Button onClick={handleShow}>New Lesson</Button>
      
    </Container>
  );
}

export default NewLesson;
