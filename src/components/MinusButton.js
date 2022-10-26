import React from 'react';
import Button from 'react-bootstrap/Button';
import '../components/BHADrag/BHADrag.css';


const MinusButton = (props) =>{
	const minusRow=props.onClick
	
	return(

		<Button variant="danger" size="sm" id="MinusButt" onClick={minusRow}>-</Button>
		)
}
 
export default MinusButton;