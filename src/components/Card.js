import React from 'react';
import Draggable from 'react-draggable';
// import {DraggableCore} from 'react-draggable'; 
// import Draggable, {DraggableCore} from 'react-draggable'
// import DragCard from '../components/DragCard.js'
import UnitCon from '../components/UnitCon.js';

//passed from CardList
const Card= ({ name, id, image, app } ) => {
	
	return (
        	<div>
		        <Draggable>
		        	<div className='bg-light-green dib br3 pa3 ma2 grow bw shadow-5'>
						{/* <img alt='robots' src={image}/> */}
						

						<div>
							<h2>{name}</h2>
							
							<div>{app} </div>
							{/* <p>Card</p> */}
						</div>		
					</div>	
		        </Draggable>	
			</div>
		);
}

export default Card;

// 'https://robohash.org/test?200x200'