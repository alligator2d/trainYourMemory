import  Card   from "@/types/card";

export default class GameBoard {
	cards: Card[];
	currentCard?: Card;
	matches: number;
	
	constructor(
		cards: Card[],
		currentCard: Card,
		matches: number,
	) {
		this.cards = cards;
		this.currentCard = currentCard;
		this.matches = matches;
	}
	
}
