import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthenticationContext } from "../authentication/authentication.context.js"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
	const { user } = useContext(AuthenticationContext);

	const [cart, setCart] = useState([]);
	const [restaurant, setRestaurant] = useState(null);

	const add = (item, rst) => {
		if (!restaurant || restaurant.placeId !== rst.placeId) {
			setRestaurant(rst);
			setCart([item]);
			return;
		}
		// This set the cart to the current cart plus the item newly added.
		setCart([...cart, item])
	}

	const clear = () => {
		setCart([]);
		setRestaurant(null);
	}

	return (
		<CartContext.Provider value={{
			addToCart: add,
			clearCart: clear,
			restaurant,
			cart,

		}} >
			{children}
		</CartContext.Provider>
	)
}
