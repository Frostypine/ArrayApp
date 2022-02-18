import React from 'react'
import {Link} from 'react-router-dom';
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
 function UserLogin() {
  return (
    <div>UserLogin
              <Form
        // onSubmit={(e) => {
        //   checkAuth(e);
        // }}
      >
        <Form.Group className="mb-3" >
          <InputGroup>
            <FormControl
              className="username-input"
              id="inlineFormInputGroupUsername"
              placeholder="username"
            //   value={username}
            //   onChange={(e) => {
            //     setUsername(e.target.value.toLowerCase());
            //   }}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control
            className="password-input"
            type="password"
            placeholder="password"
            // value={password}
            // onChange={(e) => {
            //   setPassword(e.target.value);
           // }}
          />
        </Form.Group>
        <Button variant="green" type="submit">
        <Link to="/options">  login </Link>
        </Button>
        <br />
        <Link to="/user/sign-up">
          <span className="sign-up-link">sign up</span>
        </Link>
      </Form>
    </div>
  ); 
}
export default UserLogin; 