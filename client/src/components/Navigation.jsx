
import './Components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrayPic from '../pics/arrayimg1.png'; 
import { Navbar,  Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  editUserActive,
  selectLocalUserInfo,
  selectUsers,
} from "../state/usersSlice";
import { postUser } from "../actions/userActions";
import { updateUser } from "../api/userAPI";

function Navigation() 
{
  const localUserInfo = useSelector(selectLocalUserInfo);
  const loggedIn = localUserInfo.loggedIn;
  const users = useSelector(selectUsers);
  const user = users.find((e) => e._id === localUserInfo.user_id);

  const [login, setLogin] = useState("");
  const location = useLocation().pathname;

  const navigate = useNavigate();

  return !users ? (
      <div></div>
    ) : (
    <header className="navigation">
<Navbar>
  <Container style={{color:'white'}}>
    <br/><br/><br/><br/>
    <Navbar.Brand><Link to='/'> 
     {/* Home */}
     <img src={arrayPic} alt="home" className='array-home'/>
     </Link></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <br/><br/><br/><br/>
      <Navbar.Text>
    login spot  
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>


    </header>
  );
}

export default Navigation;
