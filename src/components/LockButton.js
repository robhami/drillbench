import React from 'react';
import Form from 'react-bootstrap/Form';


const LockButton = (props) =>{
	const onSlide=props.onChange
	// console.log(props)
	
	return(

		<Form.Group className="mb-3" controlId="formBasicCheckbox">
        	<Form.Check 
        	type="checkbox" 
        	label="Draggable" 
        	defaultChecked={true} 
        	onChange={onSlide}/>
  		</Form.Group>
		)
}
 
export default LockButton;