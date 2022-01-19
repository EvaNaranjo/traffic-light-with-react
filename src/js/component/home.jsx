import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	const [showPurple, setShowPurple] = useState(false);

	function cycleLights() {
		if (color === "red") {
			setColor("orange");
		} else if (color === "orange") {
			setColor("green");
		} else if (showPurple) {
			if (color === "green") {
				setColor("purple");
			} else {
				setColor("red");
			}
		} else {
			setColor("red");
		}
	}

	let purpleLight = "";
	if (showPurple) {
		purpleLight = (
			<div
				className="light purple"
				className={
					"light purple" + (color === "purple" ? " glow" : "")
				}></div>
		);
	}

	return (
		<div className="generalContainer">
			<div className="line"></div>
			<div className="container">
				<div
					onClick={() => setColor("red")}
					className={
						"light red" + (color === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setColor("orange")}
					className={
						"light orange" + (color === "orange" ? " glow" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"light green" + (color === "green" ? " glow" : "")
					}></div>
				{purpleLight}
			</div>
			<button
				type="button"
				onClick={cycleLights}
				className="btn btn-primary changeColorBtn">
				Change color
			</button>
			<button
				type="button"
				onClick={() => {
					setShowPurple(!showPurple);
				}}
				className="btn extraColorBtn purple">
				Extra purple light
			</button>
		</div>
	);
};

export default Home;
