import React from "react";
import { observer } from "mobx-react";

function ListMenu({ store }) {
	return (
		<div>
			<button onClick={() => store.addItem({ name: "testing" })}>
				+New
			</button>
		</div>
	);
}

export default observer(ListMenu);
