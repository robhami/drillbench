import React from 'react';

const Checkboxes= ({ name, id } ) => {
	
	return (
			
			<div>
				
						<div className="flex items-center mb2">		
							<input className="mr2" type="checkbox" id={id}/>
							<label for={id} className="lh-copy">{name} </label>		
						</div>
			</div>
			


		);
}

export default Checkboxes;