import React from "react";
import { connect } from "react-redux";

const DisplayCount = (props) => {
	const createCard = () => {
		return (
			<div
				style={{
					height: "40%",
					width: 120,
					backgroundColor: "yellow",
					borderRadius: "15px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<p
					style={{
						fontFamily: 'Odibee Sans', 
						fontSize: "35px",
					}}>
					{props.count}
				</p>
			</div>
		);
	};

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}>
			{createCard()}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		count: state.count,
	};
};

export default connect(mapStateToProps,null)(DisplayCount);
