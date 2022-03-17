import React from 'react';
import Titulo from '../components/Titulo';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const About = () => {
return (
	<>
	<div className='titulo'> 
	<h1>My Bakery</h1>
	</div>
	<div className='titulo'>
		<Titulo subtitulo="Donde podes comprar comida y buscar recetas"/>
	</div>
	<>
	<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
	 <ItemListContainer/>
	</>
	
	
	</>
);
};



export default About;
