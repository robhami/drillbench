import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';


const ToolRow = () => {
//can create row component to feed the table and map the rows based a dropdown

	return (
	   
	        <tr className="bhaRow">
	          <td>
	          	<Dropdown></Dropdown>
	          </td>
	          <td></td>
	          <td></td>
	        </tr>
	      
  );


}


export default ToolRow