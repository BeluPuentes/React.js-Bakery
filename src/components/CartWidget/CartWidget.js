import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link } from "react-router-dom";
import './CartWidget.css';
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

export default function App() {
const [count, setCount] = React.useState(0);
const {cantidadCart, cart} =useContext(CartContext)
if (cart.length ===0)
	{
		return (
			<div className="cartHidden"></div>
		)
		

	}

return (
	<div>
		
	<Link to="/cart"> 
	<div >
		
		<Badge color="secondary" badgeContent={count}>
		<ShoppingCartIcon />{" "}
		
		<span>{cantidadCart()} </span>
		</Badge>
		<ButtonGroup>
		<Button 
			onClick={() => {
			setCount(Math.max(count - 1, 0));
			}}
		>
			{" "}
			<RemoveIcon fontSize="small" />
		</Button>
		<Button
			onClick={() => {
			setCount(count + 1);
			}}
		>
			{" "}
			<AddIcon fontSize="small" />
		</Button>
		</ButtonGroup>
	</div>
			
	</Link> 
	</div>
);
}
