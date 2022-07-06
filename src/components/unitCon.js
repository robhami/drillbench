import React, { Component } from 'react';
import InputGroup from'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import NavPill from '../components/NavPill.js'

class UnitCon extends Component {
	 
	 tab = (event) => {
	 	console.log(event.target)
	 };

    render() {

        return (
            <Container>
				<Card style={{ width: '18rem' }}>
					<Card className="text-center">

						 <Card.Header>
							<h2>Units Converter</h2>
								<dt> Select Units Type: </dt>
							<Nav variant="pills" id="unitsTab" defaultActiveKey="/home">		
								<Nav.Item id="massNav">
									<Nav.Link href="/home" id="mass" onClick={this.tab}>Mass</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link id="length" eventKey="link-1" onClick={this.tab}>Length</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link id="density" eventKey="link-2" onClick={this.tab}>Density</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link id="flow" eventKey="link-3" onClick={this.tab}>Flow</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link id="pressure" eventKey="link-4" onClick={this.tab}>Pressure</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link id="torque" eventKey="link-5" onClick={this.tab}>Torque</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link id="area" eventKey="link-6" onClick={this.tab}>Area</Nav.Link>
								</Nav.Item>
								<NavPill/>
							</Nav>
						</Card.Header>
					</Card>


					<Card.Body>
						<dt> Select Units To Convert: </dt>
						<InputGroup className="mb-3">
							<DropdownButton
          						variant="outline-secondary"
          						title="Units From"
        						id="unitsTo"
    						>
    						</DropdownButton>						
    							<Form.Control
      								aria-label="Example text with button addon"
      								aria-describedby="basic-addon1"
      								placeholder="Result"
      								id="userOutput" 
      								disabled 
    							/>
    					</InputGroup>

    					<InputGroup className="mb-3">		
    						<DropdownButton
          						variant="outline-secondary"
          						title="Units To"
          						id="input-group-dropdown-1"
          						
        						// id="units"
    						>
    						</DropdownButton>		
								<Form.Control
      								aria-label="Example text with button addon"
      								aria-describedby="basic-addon1"
      								placeholder="Result"
      								
      								id="userOutput" 
      								disabled 
    							/>
							
						</InputGroup>
							<Button variant="outline-success" id="button-addon2" onClick={this.formSubmit}>Convert</Button>{' '}			
				</Card.Body>
			</Card>
		</Container>

        )

    }
}
export default UnitCon

