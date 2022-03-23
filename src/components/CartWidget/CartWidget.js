import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link } from "react-router-dom";


export default function App() {
const [count, setCount] = React.useState(0);

return (
	<div style={{display: "block", right: 10, padding: 30 }}>
	<Link to="/cart"> 
	<div>
		<Badge color="secondary" badgeContent={count}>
		<ShoppingCartIcon />{" "}
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
