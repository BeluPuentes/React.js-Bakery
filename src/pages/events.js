import React, { useEffect } from 'react';

const Events = () => {
	const handleClick =(e) => {
		console.log(e)
	}
	useEffect(()=>{

		window.addEventListener('click',handleClick)

		return() =>{
			window.removeEventListener('click',handleClick)
		}

	})




return (
	<div className='titulo'	 onClick={handleClick}>
	<h1>Eventos donde encontras nuestra comida</h1>
	</div>
);
};

export default Events;
