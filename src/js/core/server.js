const Server = {};

Server.loadListItemsAsync = function loadListItemsAsync() {
	return new Promise((resolve) => {
		setTimeout(() => resolve([{
			name: "testItem1",
		}, {
			name: "testItem2",
		}]), 1000);
	});
};

export default Server;
