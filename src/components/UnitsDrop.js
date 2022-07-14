import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const UnitsDrop = (props) => {
	
	const units = props.units
	return (
	
	<>
		<DropdownButton
		variant="outline-secondary"
	    title="Units From"
	    id="unitsTo"
		>	
			<UnitsList units={units}/>
		</DropdownButton>
	</>

	)
}

const UnitsList = (props) => {
	
	const units = props.units
	return (
		<>
			{
				props.units.map((uom,i) => {

					return (
						<Dropdown.Item
						key={i}
						>
						{units[i]}
						</Dropdown.Item>
					)
				})
			}
		</>
	)	
}


export default UnitsDrop