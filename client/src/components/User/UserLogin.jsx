import React from 'react'
import {Link} from 'react-router-dom';
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';

 function UserLogin() {
  return (
    <div className='login'> Login
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
      
     <Button className='submitButton' variant="blue" type="submit"
     style={{height:'3rem', background: '',borderRadius:'15%', border: `3px solid white` }}
     >
        <Link to="/options"
        style={{color: 'white'}}
        >  login </Link>
       </Button> {/* &nbsp;&nbsp; */}
        <br/>
        <Link to="/user/sign-up">
          <span className="sign-up-link primary"
          style={{color: 'white'}}
          >sign up</span>
        </Link>
      </Form>
    </div>
  ); 
}
export default UserLogin; 