import React, { Component } from 'react';
import InputGroup from'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import NavPill from '../components/NavPill.js';
import {unitsType} from '../components/unitsType.js';
import UnitsDrop from '../components/UnitsDrop.js'

class UnitCon extends Component {

	state = {
		units: []
	}
 
	pillClick = (event) => {
	 	
	 	let unitSelect = event.target.id
	 	this.createUnitsObject(unitSelect)
	}

	createUnitsObject = (unitSelect) => {
	 	console.log(unitSelect)
		 	switch (unitSelect) {

		 	case "mass":

		 	let mass =
					{
					klb: 0.0022046226,
					lb: 2.2046226,
					metric_ton: 0.001,
					kg: 1, 
					dn: 0.9807,
					kdn: 0.009807,
					g: 1000,
					};
				// this.assignConvFac (mass);
				this.createUnitsArray (mass);
		 		break;
	 		
		 	case "length":
		 		let length =
					{
					m: 1, 
					ft: 3.28084,
					km: 0.001,
					inch: 39.37008,
					mile: 0.00062,
					cm: 100,
					mm: 1000,
					yard: 1.09361,
					};
				this.createUnitsArray (length);
		 		break;
		 	
			case "density":
		 		let density =
					{
					ppg: 0.0083,
					SG: 0.001,
					kg_m3: 1, 
					g_cm3: 0.001,
					pcf: 0.06243,				
					};
				this.createUnitsArray (density);
		 		break;

	 		case "flow":
		 		let flow =
					{
					LPM: 1, 
					GPM_US: 0.26417,
					ft3_min: 0.06243,
					m3_min: 0.001,
					in3_min: 61.02376,
					BBL_US_min: 0.00629,
					ml_min: 1000,
					};

				this.createUnitsArray (flow);
		 		break;

	 		case "pressure":
		 		let pressure =
					{
					bar: 1, 
					psi: 14.50377,
					Pa: 100000,
					kPa: 100,
					mPa: 0.1,
					atm: 0.98692,
					kg_cm2: 1.01972,
					kg_m2: 10197.16,
					};

				this.createUnitsArray (pressure);
		 		break;

	 		case "torque":
		 		let torque =
					{
					N_m: 1,
					ft_lb: 0.737562,
					kft_lb: 0.000737562,
					kg_m: 0.1019716,
					kN_m: 0.001,	
					};

				this.createUnitsArray (torque);
		 		break;

	 		case "area":
		 		let area =
					{
					m2: 1,
					cm2: 10000,
					in2: 1550,
					ft2: 1.19599,
					mm2: 1000000,
					};

				this.createUnitsArray (area);
		 		break;
			}
 	}

 	createUnitsArray = (units) => {
 		let unitsArray=Object.keys(units)
 		this.setState({units: unitsArray})
 	}

    render() {
    	const {units} = this.state;
    	
        return (
            <Container>
				<Card style={{ width: '18rem' }}>
					<Card className="text-center">
						 <Card.Header>
							<h2>Units Converter</h2>
								<dt> Select Units Type: </dt>
							<Nav variant="pills" id="unitsTab" defaultActiveKey="0">		
							
								<NavPill unitsType={unitsType} pillClick={this.pillClick}/>
							</Nav>
						</Card.Header>
					</Card>


					<Card.Body>
						<dt> Select Units To Convert: </dt>
						<InputGroup className="mb-3">
							<UnitsDrop
								units={units}			
							/>

							<Form.Control
  								aria-label="Example text with button addon"
  								aria-describedby="basic-addon1"
  								placeholder="Result"
  								id="userOutput" 
  								disabled 
							/>
    					</InputGroup>
						<InputGroup className="mb-3">
							<UnitsDrop
								units={units}	
							/>
												
    							<Form.Control
      								aria-label="Example text with button addon"
      								aria-describedby="basic-addon1"
      								placeholder="Result"
      								id="userOutput" 
      								disabled 
    							/>
    					</InputGroup>

						<Button variant="outline-success"id="button-addon2" onClick={this.formSubmit}>Convert</Button>{' '}			
				</Card.Body>
			</Card>
		</Container>

        )

    }
}
export default UnitCon

	