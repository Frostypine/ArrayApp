import React from 'react'
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap'

function NavigationBar() {
 
    return (
      <header>
        <Nav variant="tabs" defaultActiveKey="/" horizontal>
          <Nav.Item>
            <Nav.Link href="/"><Link to="/">Home</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/assignments"><Link to="/assignments">Assignments</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/groupwork"><Link to="/groupwork">Groupwork</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/lessons"><Link to="/lessons">Lessons</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/resources"><Link to="/resources">Resources</Link></Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
    )
  }


export default NavigationBar; 