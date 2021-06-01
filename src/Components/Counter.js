import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import incrementCount from "../redux/action";

const Counter = (props) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}>
			<Button variant={"primary"} onClick={props.incrementCount}>
				Click Me
			</Button>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		incrementCount: () => dispatch(incrementCount()),
	};
};

export default connect(null, mapDispatchToProps)(Counter);
