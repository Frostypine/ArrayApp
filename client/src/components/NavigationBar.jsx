import React from 'react'
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap'

function NavigationBar() {
 
    return (
      <header>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/"><Link to="/">Home</Link></Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
    )
  }


export default NavigationBar; 