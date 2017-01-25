import React from "react";
import { observer } from "mobx-react";

const ListItem  = observer(({ index, name, onDelete }) => {
	return (
		<li>
			{name}
			<button onClick={() => onDelete(index)}>
				remove	
			</button>
		</li>
	)
});

export default ListItem;
