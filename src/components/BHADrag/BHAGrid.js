import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import ToolRow from './ToolRow.js'
import AddButton from '../AddButton.js';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const BHAGrid = () => {
//can create row component to feed the table and map the rows based a dropdown

	const [rowCount, setRows] = useState(8)
	
	const addRow = (props) => {
			// console.log(rowCount)
			setRows(rowCount+1)
				console.log("clicked")
				console.log(rowCount)
				}

	console.log(rowCount)

	const renderRows = () => {
		let ToolRows = [];
		for(let i=0;i<rowCount;i++){
			ToolRows.push(<ToolRow key={i}></ToolRow>)
		}
		console.log(ToolRows)
		return ToolRows
  	}


	return (
		<div>
		<InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Rows</InputGroup.Text>
       	<AddButton onClick={addRow}/>
      </InputGroup>

{/*  */}
{/* 		<Form.Control className={"form-control"} type="number" id="numRows" placeholder={rowCount+" "+"rows"} label="Rows"/> */}
{/* 	 */}
{/*  */}
{/*  */}
{/* 	<input className="input-group" type="number"  placeholder={rowCount+" "+"rows"} label="Rows"></input> */}
	
		
	    <Table striped bordered hover>

	      <thead>

	        <tr className="bhaRow">  
	          <th>Tool</th>
	          <th>Type</th>
	          <th>Length</th>
	        </tr>
	      </thead>
	      <tbody>
	      {renderRows()}
	      </tbody>
	    </Table>
	    
	  
	   
	    </div>	
  );


}


export default BHAGrid