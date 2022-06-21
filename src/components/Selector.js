import React from 'react';
import Checkboxes from './Checkboxes.js';
import {widgets} from '../components/widgets.js';


const Checks =() => {
	return(
		<div>
		<form className = "pa0">
			<fieldset id="" className="bn">
				<legend className="fw7 mb2">Select Apps</legend>	
					{
						widgets.map((user,i)=> {
							return(	
								<Checkboxes
									key={i} 
									id={widgets[i].id} 
									name={widgets[i].name} 
								/>			
							)
						})	
					}

			</fieldset>
				</form>	
		</div>
	)
	
}

const Selector= () => {
	
	return (
		
	<div 
	className=' bg-light-green dib br3 pa3 ma2 bw shadow-5'
	>
		<Checks/>
			
	</div>

		);
}

export default Selector;