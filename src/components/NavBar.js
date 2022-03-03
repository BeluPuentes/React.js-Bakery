import React from 'react';
import CartWidget from '../components/CartWidget/CartWidget'
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/about' activeStyle>
			Home
		</NavLink>
		<NavLink to='/events' activeStyle>
			Eventos
		</NavLink>
		<NavLink to='/comprar' activeStyle>
			Comprar
		</NavLink>
		<NavLink to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			Unirse
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
		<CartWidget/>
	</Nav>
	</>
);
};

export default Navbar;
