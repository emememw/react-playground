import React from "react"

function ListHeadline({ listItemLength }) {
	return (
		<div>
			<h2>
				There are { listItemLength } items.
			</h2>
		</div>
	);
}

export default ListHeadline;
