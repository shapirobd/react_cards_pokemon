import React, { useState } from "react";

const useFlip = () => {
	const [isFaceUp, toggleFaceUp] = useState(true);
	const flipCard = () => {
		toggleFaceUp((isUp) => !isUp);
	};
	return [isFaceUp, flipCard];
};

export { useFlip };
