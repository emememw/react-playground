import React from "react";
import Card from "react-dnd/card.jsx";
import DndCard from "react-dnd/dndcard.jsx";
import CardDropZone from "react-dnd/carddropzone.jsx";
import CardDropZoneComplex from "react-dnd/carddropzonecomplex.jsx";
import DndWrapper from "react-dnd/dndwrapper.jsx";
import CardStore from "react-dnd/cardstore";
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

@DragDropContext(HTML5Backend)
export default class CardContainer extends React.Component {
	render() {
		return (
			<div>
				<div style={{ width: "500px", height: "500px", border: "1px dotted #000" }}>
					<Card />
					<DndCard mySpecialId="1234Test"/>
					<DndWrapper mySpecialId="5678Bla">
						<Card />
					</DndWrapper>
				</div>
				<CardDropZone />
				<CardDropZoneComplex store={new CardStore()} />
			</div>
		);
	}
}

