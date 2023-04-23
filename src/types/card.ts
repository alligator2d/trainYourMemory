export default class Card {
	value: string;
	isFlipped: boolean;
	isMatched: boolean;

	constructor(
		value: string,
		isFlipped: boolean, 
		isMatched: boolean
	) {
		this.value = value;
		this.isFlipped = isFlipped;
		this.isMatched = isMatched;
	}

}
// export  type Card = {
// 	value: string;
// 	isFlipped: boolean;
// 	isMatched: boolean;
//	
// }
