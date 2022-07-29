import React, {Component} from 'react';
import './BHADrag.css';
import Draggable from 'react-draggable';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class BHADrag extends Component {

	// state ={
	// 
	// }

	render(){
	
		return (
		
			<Container>
				<Card >
					<Card className="text-center">
						 <Card.Header>
							<dt> Select BHA Component: </dt>

						
						</Card.Header>
					</Card>


					<Card.Body>
						<Draggable>
							<div className="box">DC</div>
						</Draggable>

						{/* <Button variant="outline-success"id="button-addon2" >Convert</Button>{' '}			 */}
				</Card.Body>
			</Card>
		</Container>
		)
						
	}	
}

export default BHADrag;