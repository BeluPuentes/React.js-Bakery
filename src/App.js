import React, { useState } from 'react';
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
import Modal from './Modal/Modal';
import {CartProvider} from './Context/CartContext'
import {Cart} from './components/Cart/Cart';

alert ("Bienvenido");



function App() {


return (
	<CartProvider>
	<Router>
	<Navbar />
	<Modal/>
	<Routes>
		<Route path='/' exact element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/events' element={<Events/>}/>
		<Route path='/comprar/:categoryId' element={<ItemListContainer/>} />
		<Route path='/detail/:itemId' element={<ItemDetailContainer/>} />
		<Route path='/team' element={<Teams/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/sign-up' element={<SignUp/>} />
		<Route path="*" element={<Navigate to ="/" />} />
		<Route path='/Cart' element={<Cart/>} />
	</Routes>
		

	</Router>

	</CartProvider>
	

	
);
}

export default App;
