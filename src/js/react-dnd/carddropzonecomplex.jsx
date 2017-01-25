import React from "react";
import { DropTarget } from 'react-dnd';
import { observer } from "mobx-react";
import Card from "react-dnd/card.jsx";

@observer
@DropTarget("mySpecialCardType", {
	drop: (props, monitor, component) => {
		console.log("drop!");
		props.store.addCard(monitor.getItem().mySpecialId);
	},
	hover: (props, monitor, component) => console.log("card hover!"),
	canDrop: (props, monitor) => true,
}, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	isOverCurrent: monitor.isOver({ shallow: true }),
	canDrop: monitor.canDrop(),
	itemType: monitor.getItemType(),
}))
export default class CardDropZone extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return this.props.connectDropTarget(
			<div style={{ width: "500px", minHeight: "100px", background: "#ccc" }}>
				<h1> D R O P Z O N E 2 </h1>
				{ this.props.store.selectedCardIds.map((cardId, index) => {
					return <Card key={index}/>;
				})}
			</div>
		);
	}
}
