import React from "react";
import {render} from "react-dom";
import VanillaList from "vanilla-react/list.jsx";
import MobxList from "mobx/list.jsx";
import ListStore from "mobx/liststore";
import CardContainer from "react-dnd/cardcontainer.jsx";

if (module.hot) {
	module.hot.accept();
}

class App extends React.Component {
	constructor() {
		super();
		this.listStore = new ListStore();
	}
	render() {
		return (
			<div>
				<VanillaList />
				<MobxList store={this.listStore} />
				<CardContainer />
			</div>
		)
	}
};

render(<App />, document.querySelector("#app"));
