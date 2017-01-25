import React from "react";
import { DragSource } from 'react-dnd';

const cardSource = {
	beginDrag(props) {
		return { mySpecialId: props.mySpecialId };
	},
	endDrag(props, monitor, component) {
		console.log("drag ended");
		console.log(monitor.didDrop());
		if (!monitor.didDrop()) {
			return;
		} else {
			console.log(monitor.getItem());
		}
	}
};

@DragSource("mySpecialCardType", cardSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))
class DndWrapper extends React.Component {
	render() {
		return this.props.connectDragSource(
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default DndWrapper;
