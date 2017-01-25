import React from "react";
import ListItem from "mobx/listitem.jsx";
import ListHeadline from "mobx/listheadline.jsx";
import ListMenu from "mobx/listmenu.jsx";
import Server from "core/server";
import { observer } from "mobx-react";

@observer
class List extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.store.fetch();
	}

	onListItemDelete(index) {
		this.props.store.removeItem(index);
	}

	render() {
		if (this.props.store.loading) {
			return (
				<div>
					loading ...
				</div>
			)
		} else {
			return (
				<div>
					<hr />
					<ListMenu store={this.props.store} />
					<ListHeadline listItemLength={ this.props.store.listItems.length }/>
					<ul>
						{ this.props.store.listItems.map((listItem, index) => 
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
