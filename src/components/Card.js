import React from 'react';

const Card= ({ name, id, image } ) => {
	
	return (
		
	<div className='bg-light-green dib br3 pa3 ma2 grow bw shadow-5'>
			<img alt='robots' src={image}/>
			<div>
				<h2>{name}</h2>
				<p>Card</p>
			</div>
			
	</div>

		);
}

export default Card;

// 'https://robohash.org/test?200x200'