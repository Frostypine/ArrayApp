import React from 'react'
import {Link} from 'react-router-dom';
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserActive, loginUser, selectLocalUserInfo, selectUsers } from "../../state/usersSlice";
import { updateUser } from "../../api/userAPI";


 function UserLogin() {
  const localUserInfo = useSelector(selectLocalUserInfo)
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkAuth = (e) => {
    e.preventDefault();
    if (username === "") return alert("username cannot be empty");
    if (password === "") return alert("password cannot be empty");
    const user = users.find((e) => e.username === username)
    if (!user) return alert("user not found");
    if (user.password === "") alert("you cannot login as an anonymous user")
    if (password === user.password) {
      const userData = {
        _id: localUserInfo.user_id,
        socket_id: "",
        active: false,
      };
      dispatch(editUserActive(userData));
      updateUser(userData._id, {
        active: userData.active,
        socket_id: userData.socket_id,
      });
      dispatch(
        loginUser({
          user_id: user._id,
          loggedIn: true,
        })
      );
    }
  };
  return (
    <div className='login'> Login
              <Form
        onSubmit={(e) => {
          checkAuth(e);
        }}
      >
        <Form.Group className="mb-3" >
          <InputGroup>
            <FormControl
              className="username-input"
              id="inlineFormInputGroupUsername"
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value.toLowerCase());
              }}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control
            className="password-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
           }}
          />
        </Form.Group>
      
     <Button className='submitButton' variant="blue" type="submit"
     style={{height:'3rem', background: '',borderRadius:'15%', 
             border: `3px solid white`, color: 'white' }}
     >
     
         login
       </Button>
        {/* &nbsp;&nbsp; */}
        <br/>
        <Link to="/user/sign-up">
          <span className="sign-up-link primary"
          style={{color: 'white'}}
          >sign up</span>
        </Link>
        <br/> <br/>
           <Link to="/options"> 
           options
            </Link>
      </Form>
    </div>
  ); 
}
export default UserLogin; 