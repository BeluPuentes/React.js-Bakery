import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import Comprar from './pages/comprar';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Titulo from './components/Titulo';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const text= "My Bakery"
const sub = "Donde podes comprar comida y buscar recetas "

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={<Home/>} />
		<Route path='/about' component={<About/>} />
		<Route path='/events' component={<Events/>}/>
		<Route path='/comprar' component={<Comprar/>} />
		<Route path='/team' component={<Teams/>} />
		<Route path='/blogs' component={<Blogs/>} />
		<Route path='/sign-up' component={<SignUp/>} />
	</Routes>

		<div className='titulo'>
			<Titulo texto={text} subtitulo={sub}/>
	
		</div>
		<ItemListContainer/>
		
	</Router>
	
);
}

export default App;
