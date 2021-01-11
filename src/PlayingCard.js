import React, { useState } from "react";
import backOfCard from "./back.png";
import { useFlip } from "./hooks.js";

import "./PlayingCard.css";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
	const [isFaceUp, flipCard] = useFlip();
	return (
		<img
			src={isFaceUp ? front : back}
			alt="playing card"
			onClick={flipCard}
			className="PlayingCard Card"
		/>
	);
}

export default PlayingCard;
