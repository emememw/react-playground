import React from "react";
import { DropTarget } from 'react-dnd';

@DropTarget("mySpecialCardType", {
	drop: (props, monitor, component) => console.log("drop!"),
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
	render() {
		return this.props.connectDropTarget(
			<div style={{ width: "500px", height: "100px", background: "#ccc" }}>
				<h1> D R O P Z O N E </h1>
			</div>
		);
	}
}
