import React from "react";

const Weather = props => (
	<div className="weather__info">


	 { 	// if props exists, render out the paragraph
	 	props.cases && <p className="weather__key"> Cases: 
	 		<span className="weather__value"> { props.cases }	</span>
	 	</p> 
	 }
	 { 	
	 	props.deaths && <p className="weather__key"> Deaths: 
	 		<span className="weather__value"> { props.deaths } </span>
	 	</p> 
	 }
	 { 	
	 	props.dangerzone && <p className="weather__key"> Dangerzone: 
	 		<span className="weather__value"> { props.dangerzone } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;