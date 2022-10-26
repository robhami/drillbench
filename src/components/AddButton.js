import React from 'react';
import Button from 'react-bootstrap/Button';
import '../components/BHADrag/BHADrag.css';


const AddButton = (props) =>{
	const addRow=props.onClick
	
	return(

		<Button variant="primary" size="sm" id="AddButt" onClick={addRow}>+</Button>
		)
}
 
export default AddButton;