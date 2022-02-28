import './User.css'; 
import React from "react";
import { useState } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../state/usersSlice";
import { postUser } from "../../actions/userActions";


function UserSignUp() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const checkAuth = (e) => {
    e.preventDefault();
    if (username === "") return alert("username cannot be empty");
    if (password1 === "") return alert("create password cannot be empty");
    if (password2 === "") return alert("confirm password cannot be empty");
    let user = users.find((e) => e.username === username);
    if (user) return alert("username already exists");
    if (password1 !== password2) alert("your passwords don't match");
    dispatch(
      postUser({
        username: username,
        password: password1,
      })
    );
  };

  return (
    <div className="user-sign-up">
        <br/>  <br/>
      <Form
        onSubmit={(e) => {
          checkAuth(e);
        }}
      >
    Sign Up
        <Form.Group className="mb-3" >
          <InputGroup>
            <FormControl
              className="username-input"
              id="inlineFormInputGroupUsername"
              placeholder="create username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </InputGroup>
        </Form.Group>
        {/* <br /> */}
        <Form.Group className="mb-3" >
          <Form.Control
            className="password-input"
            type="password"
            placeholder="create password"
            value={password1}
            onChange={(e) => {
              setPassword1(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control
            className="password-input"
            type="password"
            placeholder="confirm password"
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
        </Form.Group>
      
        <Button variant="green" type="submit"
       style={{height:'3rem', background: '',borderRadius:'15%', border: `3px solid white`,
       color:'white' }}
        >
          login
        </Button>
      </Form>
    </div>
  );
}

export default UserSignUp;
