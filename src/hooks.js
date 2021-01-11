import React, { useState } from "react";
import axios from "axios";
import uuid from "uuid/v4";

const useFlip = () => {
	const [isFaceUp, toggleFaceUp] = useState(true);
	const flipCard = () => {
		toggleFaceUp((isUp) => !isUp);
	};
	return [isFaceUp, flipCard];
};

const useAxios = (url) => {
	const [cards, setCards] = useState([]);
	const addCard = async () => {
		const response = await axios.get(url);
		setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
	};
	return [cards, addCard];
};

export { useFlip, useAxios };
