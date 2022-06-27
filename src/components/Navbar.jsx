import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropDown';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchDrop from '../components/SearchDrop.js';
import Form from 'react-bootstrap/Form';

// const Navbar = () => {
class Navbar extends Component {


	handleInputChange = event => {
		this.props.onChange(event[0].label)
		console.log(event[0].label)
	}
 	
	render () {
		 return (
     
	  	<Nav
		  activeKey="/home"
		  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
		>

			<h1 >drillBenchx</h1>
		  	<Nav.Item>
			    <Nav.Link href="/home">Active</Nav.Link>
		  	</Nav.Item>
			<Nav.Item>
	    		<Nav.Link eventKey="link-1">Link</Nav.Link>
	  		</Nav.Item>
		  	<Nav.Item>
			    <Nav.Link eventKey="link-2">Link</Nav.Link>
		  	</Nav.Item>
		  	<Nav.Item>
			    <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
		  	</Nav.Item>
			<Nav.Item>
			        <Form.Group className="mb-3" id="DD">
			        	<SearchDrop xonChange={this.handleInputChange}/>
			        </Form.Group>
			</Nav.Item>
		</Nav>      
    	)  






	}
      
}


export default Navbar;