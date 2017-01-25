import React from "react";
import ListItem from "vanilla-react/listitem.jsx";
import ListHeadline from "vanilla-react/listheadline.jsx";
import Server from "core/server";

class List extends React.Component {
	constructor() {
		super();
		this.state = {
			listItems: [],
			loading: true,
		};
	}

	componentDidMount() {
		Server.loadListItemsAsync().then((listItems) => {
			this.setState({
				listItems,
				loading: false,
			});
		});
	}

	onListItemDelete(index) {
		const listItems = this.state.listItems;
		listItems.splice(index, 1);
		this.setState({
			listItems, 
		});
	}

	render() {
		if (this.state.loading) {
			return (
				<div>
					loading ...
				</div>
			)
		} else {
			return (
				<div>
					<ListHeadline listItemLength={ this.state.listItems.length }/>
					<ul>
						{ this.state.listItems.map((listItem, index) => 
							<ListItem
								index={index}
								key={index}
								name={listItem.name}
								onDelete={index => this.onListItemDelete(index)}
							/>
						)}
					</ul>
				</div>
			);
		}
	}
}

export default List;
