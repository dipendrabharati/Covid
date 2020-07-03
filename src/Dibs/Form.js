import React from "react";

const Form = props => (           // react attribute, it call 
	<form onSubmit={props.getWeather}> 
		<input type="text" name="city" placeholder="Province1..."/>
		<input type="text" name="country" placeholder="Jhapa..."/>
		<button>Get Info</button>  
	</form>             // when we press the button this form is going to be submit
);

export default Form;