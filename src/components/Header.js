import React from "react";
import headerImg from "../images/header-img.png";
export default function Header() {
	return (
		<header className=" d-flex justify-content-sm-between align-items-center justify-content-center">
			<h3 className="appName">
				<img src={headerImg} alt="troll face" />
				<span className="heading-text">Meme Generator</span>
			</h3>
			<h3 className="currentCourse d-none d-sm-block">
				<span className="main-course">react course</span> -{" "}
				<span className="project-no">project 3</span>
			</h3>
		</header>
	);
}
