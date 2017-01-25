import React from "react";

function ListItem({ index, name, onDelete }) {
	return (
		<li>
			{name}
			<button onClick={() => onDelete(index)}>
				remove	
			</button>
		</li>
	)
}

export default ListItem;
