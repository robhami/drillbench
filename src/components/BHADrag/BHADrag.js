import React, {Component} from 'react';
import './BHADrag.css';
import BHAGrid from './BHAGrid';
import BHAComp from './BHAComp';
import MyFirstGrid from './MyFirstGrid';
import Draggable from 'react-draggable';
import Container from 'react-bootstrap/Container';
import AddButton from '../AddButton.js';

class BHADrag extends Component {
	
	render(){
		 	const addRow = () => {
				console.log("clicked")

			}

		return (
			<Container>	
					<BHAGrid>
					<MyFirstGrid/>
					</BHAGrid>

					<BHAComp>
						<div className="rectangle">DC</div>
					</BHAComp>
			</Container>
		)
						
	}	
}

export default BHADrag;