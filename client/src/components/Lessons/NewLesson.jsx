
import React from "react";
import { useState } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../state/lessonsSlice";
import { postUser } from "../../actions/lessonActions";


function UserSignUp() {
  const dispatch = useDispatch();
  const lessons = useSelector(selectUsers);
  const [title, setUsername] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const submitLesson= (e) => {
    e.preventDefault();
    if (title === "") return alert("title cannot be empty");
    if (author === "") return alert("author cannot be empty");
    if (text === "") return alert("text cannot be empty");
    let lesson = lessons.find((e) => e.title === title);
    if (lesson) return alert("title already exists");
    dispatch(
      postUser({
        title: title,
        author: author,
        text: text,
      })
    );
  };

  return (
    <div className="lesson-sign-up">
        <br/>  <br/>
      <Form
        onSubmit={(e) => {
          submitLesson(e);
        }}
      >
    Sign Up
        <Form.Group className="mb-3" >
          <InputGroup>
            <FormControl
              className="title-input"
              id="inlineFormInputGroupUsername"
              placeholder="create title"
              value={title}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </InputGroup>
        </Form.Group>
        {/* <br /> */}
        <Form.Group className="mb-3" >
          <Form.Control
            className="author-input"
            placeholder="create password"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control
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
       color:'white' }}
        >
          submit
        </Button>
      </Form>
    </div>
  );
}

export default UserSignUp;
