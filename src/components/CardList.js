import React from 'react';
import Card from './Card';


const CardList = ({widgets}) => {
	return (	
		<div>
		{
			widgets.map((user,i)=> {
				return (
					<Card 
						key={i} 
						id={widgets[i].id} 
						name={widgets[i].name} 
						image={widgets[i].image}
					/>
				);
			})	
		}
	    </div>
    );
}

export default CardList