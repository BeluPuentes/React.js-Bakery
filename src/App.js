import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, useRoutes, Navigate } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import Comprar from './pages/comprar';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Titulo from './components/Titulo';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

alert ("Bienvenido");



function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/events' element={<Events/>}/>
		<Route path='/comprar/:categoryId' element={<ItemListContainer/>} />
		<Route path='/detail/:itemid' element={<ItemDetailContainer/>} />
		<Route path='/team' element={<Teams/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/sign-up' element={<SignUp/>} />
		<Route path="*" element={<Navigate to ="/" />} />
	</Routes>

		<div>
			
			<ItemDetailContainer/>

		</div>
		
		
		

	</Router>
	

	
);
}

export default App;
