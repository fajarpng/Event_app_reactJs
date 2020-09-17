import React from 'react';


import { Navbar, Nav } from 'react-bootstrap'

export const TopNavbar = () => {
	return(
		<Navbar bg="primary" variant="dark" fixed="top" expand="lg">
	    <Navbar.Brand href="#home">Event</Navbar.Brand>
	    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">
		      <Nav.Link href="/">Home</Nav.Link>
		      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
		    </Nav>
		  </Navbar.Collapse>
	  	</Navbar>
	)
}