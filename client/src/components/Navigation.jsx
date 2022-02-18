
import './Components.css';
import { Navbar,  Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() 
{
  return(
    <header className="navigation">
<Navbar>
  <Container>
    <Navbar.Brand>Navbar with text</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
    login spot  
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>

      {/* <Navbar collapseOnSelect expand="md" bg="black" variant="dark">
        <Container fluid>
          <Link className="nav-link logo" to="/">
           Home
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav default activeKey="/" className="ms-auto">
              <Link className="options link" to="/options">
               options 
              </Link>
              
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </header>
  );
}

export default Navigation;
