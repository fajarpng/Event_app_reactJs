import React from 'react';

import { Navbar, Nav } from 'react-bootstrap'

export const TopNavbar = () => {
	return(
		<Navbar bg="primary" variant="dark" fixed="top" expand="lg">
	    <Navbar.Brand href="/">Event</Navbar.Brand>
	    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">
		      <Nav.Link href="/">Add Event</Nav.Link>
		      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
		      <Nav.Link href="/table">Table</Nav.Link>
		    </Nav>
		  </Navbar.Collapse>
	  	</Navbar>
	)
}