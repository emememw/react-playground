import { observable } from "mobx";

export default class CardStore {
	@observable selectedCardIds = [];

	addCard(cardId) {
		this.selectedCardIds.push(cardId);
	}
}

