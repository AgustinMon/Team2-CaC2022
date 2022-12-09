import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import "./DarkMode.css";

export default function DarkMode() {

	const { darkMode, toggleDarkMode } = useContext(MainContext);
	const rootVar = document.documentElement.style;

	useEffect(() => {
		if (darkMode) coloresOscuros();
		else coloresClaros();
	}, [darkMode]);

	function coloresClaros() {
		rootVar.setProperty("--colorBody", "#F4F4F4");
		rootVar.setProperty("--colorFondo", "#ffffff");
		rootVar.setProperty("--colorLetras", "#303030");
		rootVar.setProperty("--colorSidebar", "#dddddd");
		rootVar.setProperty("--colorOutline", "#303030");
		rootVar.setProperty("--degrade", "rgba(255, 255, 255, 0.7)");
		rootVar.setProperty("--degradeHover", "rgba(255, 255, 255, 0.9)");
	}

	function coloresOscuros() {
		rootVar.setProperty("--colorBody", "#212529");
		rootVar.setProperty("--colorFondo", "#212529");
		rootVar.setProperty("--colorLetras", "#F4F4F4");
		rootVar.setProperty("--colorSidebar", "#212529");
		rootVar.setProperty("--colorOutline", "#f4f4f4");
		rootVar.setProperty("--degrade", "rgba(0, 0, 0, 0.5)");
		rootVar.setProperty("--degradeHover", "rgba(0, 0, 0, 0.9)");
	}

	function handleOnClick(e) {
		document.querySelector('#switch').classList.toggle('active');
		toggleDarkMode(e, darkMode)
	}

	return <div>
		{/* <input type="checkbox" id='checkbox' />Cambiar modo */}
		<button className="switch" id="switch" onClick={(e)=> handleOnClick(e)}>
			<span><FontAwesomeIcon icon={faSun} className="Icono" /></span>
			<span><FontAwesomeIcon icon={faMoon} className="Icono" /></span>
		</button>
	</div>;
}
