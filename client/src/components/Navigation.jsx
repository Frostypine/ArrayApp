
import './Components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrayPic from '../pics/arrayimg1.png'; 
import { Navbar,  Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() 
{
  return(
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
