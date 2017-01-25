import React from "react"
import { observer } from "mobx-react";

const ListHeadline = observer(({ listItemLength }) => {
	return (
		<div>
			<h2>
				There are { listItemLength } items.
			</h2>
		</div>
	);
});

export default ListHeadline;
