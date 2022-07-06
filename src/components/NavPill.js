import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';

const NavPill = (props) => {
	return(
	
	<Nav variant="pills" defaultActiveKey="/home">		
		<Nav.Item>
			<Nav.Link href="/home">Test</Nav.Link>
		</Nav.Item>
	</Nav>
	)
}

export default NavPill