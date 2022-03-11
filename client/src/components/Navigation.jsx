//
//Capstone Project
//Array Bootcamp Fall 2021 -Spring 2022
//Katie Greenwald
import './Components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container  } from "react-bootstrap";

import arrayPic from '../pics/arrayimg1.png'; 
import { Link } from "react-router-dom";
//import { useState } from "react";//, useEffect
//import { useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";
//import { useDispatch } from 'react-redux';
import {
 // editUserActive,
  selectLocalUserInfo,
  selectUsers,
} from "../state/usersSlice";
//import { postUser } from "../actions/userActions";
//import { updateUser } from "../api/userAPI";

function Navigation() 
{
  //const dispatch = useDispatch();
  const localUserInfo = useSelector(selectLocalUserInfo);
  const loggedIn = localUserInfo.loggedIn;
  const users = useSelector(selectUsers);
  const user = users.find((e) => e._id === localUserInfo.user_id);

  // const logout = () => {
  //   const userData = {
  //     _id: localUserInfo.user_id,
  //     active: false,
  //   };
  //   updateUser(userData._id, {
  //     active: userData.active,
  //   });
  //   dispatch(editUserActive(userData));
  //   dispatch(
  //     postUser({
  //       username: "",
  //       password: "",
  //     })
  //   );
  // };


   //const [login, setLogin] = useState("");
  // const location = useLocation().pathname;
 // const navigate = useNavigate();

  return !users ? (
      <div></div>
    ) : (
<header className="navigation">
 <Navbar collapseOnSelect expand="md" >
  <Container fluid style={{color:'white'}}>
    <br/><br/><br/><br/>
    <Navbar.Brand><Link to='/'> 
     {/* Home */}
     <img src={arrayPic} alt="home" className='array-home'/>
     </Link></Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end">
      <Nav className="ms-auto">
    <br/><br/><br/><br/>
    {!user ? (
                <div></div>
              ) : loggedIn ? (
                <div className="nav-profile-dropdown">
                  <img
                    className="nav-profile-pic"
                    style={{ border: `1px solid red` }}//${user.color}
                    src={user.avatar}
                    alt=""
                    // onClick={() => {
                    //   navigate("/user/profile");
                    // }}
                  />
                  <NavDropdown className="dropdown" id="basic-nav-dropdown">
                    {/* <NavDropdown.Item>
                      <Link className="dropdown-item" to="/user/profile">
                        Profile
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="dropdown-item" to="/user/settings">
                        Settings
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link className="dropdown-item" to="/user/leaderboard">
                        Leaderboard
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </NavDropdown.Item> */}
                  </NavDropdown>
                </div>
              ) : (
                <Link className="link " to="/user/login">
                  Login
                </Link>
              )}

      {/*+ login <Navbar.Text>
    login spot  
      </Navbar.Text> */}

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


    </header>
  );
}

export default Navigation;
