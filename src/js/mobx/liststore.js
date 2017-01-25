import { observable } from "mobx";
console.log(observable);
import Server from "core/server";

class ListStore {
	@observable listItems = [];
	@observable loading = true;

	removeItem(index) {
		this.listItems.splice(index, 1);
	}

	addItem(listItem) {
		for (let i = 0; i < 100; i++) {
			this.listItems.push(listItem);
		}
	}

	fetch() {
		Server.loadListItemsAsync().then((listItems) => {
			this.listItems = listItems;
			this.loading = false;
		});
	}
}

export default ListStore;
