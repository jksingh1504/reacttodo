import React from "react";
import "./style.css";

const Completed = ({ show }) => {
	return (
		<div>
			{show.map((ele) => (
				<>
				<br />
				<s>{ele.value}</s>
				<br />
				</>
			))}
		</div>
	);
};

export default Completed;
