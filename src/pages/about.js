import React from 'react';
import Titulo from '../components/Titulo';

const About = () => {
return (
	<>
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<h1>My Bakery</h1>
	</div>
	<div className='App'>
		<Titulo texto="HOLA" subtitulo="como estas"/>
	</div>
	
	</>
);
};



export default About;
