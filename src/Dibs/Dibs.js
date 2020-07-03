import React from "react";
import { Link } from "react-router-dom";
import './Dibs_style.css';

import Titles from "./Title";
import Form from "./Form";
import Weather from "./Weather";
                                                    // when you make an api call, it will get associated with your email and then when you make the call, the webiste will know who you are
                                                    // and what kind of data are you trying to access via your api keys
class WeatherPage extends React.Component {         //this is creating an instanceof WeatherPage which is extending React.component
                                                    // React.component is an object that lives somewhere in node modules 
  state = {                                         // state is an object it contains key value pairs  
    cases: undefined,                         // initial state of the temperature, it's only gonna change once we press buttton
    deaths: undefined,
    dangerzone: undefined,
    error: undefined
  } 

  getWeather = async (e) => {                           // this function is bound to App component
    e.preventDefault();                                 // It is going to prevent the default that is refreshing the page, it represents single page application
    const city = e.target.elements.city.value; 
    const country = e.target.elements.country.value; 
  const api_call = await fetch( `/messanger/login?userId=${city}&password=${country}`); // template string allow you to inject variables that you defined
                                                        // makes to the call to his url
   const data = await api_call.json();   

  // console.log(data);              // javascript object notation: converts data from the api to readable form that any programming language can understand
    if (city && country) {                              // If city and country are not empty, the if statement becomes true and execute s the statement below
      this.setState({                                   // don't directly manipulate the states ('this.state.temperature= something;)
                                                        // builtin method called setState, within that you can define state value
        cases: data.cases,                    // to access anything we have to start with data,then main (from console), then temp (from console)
        deaths: data.deaths,
        dangerzone: data.dangerzone,
        error: " "
      });
    } else {
      this.setState({
        cases: undefined,
        deaths: undefined,
        dangerzone: undefined,
        error: "Please enter the values."
      });
    }
  }
 
  render() {                                                      // rendermethod displays the data that is going to inside React.component, everything in here gets displayed in the screen
    return (                                                      // it returns JSX, not html, its javascript code running in background
                                                                  // React and , work to covert html into Javascript     
      <div>   
        <div className="wrapper"> 
          <div className="main">
            <div className="container">
              <div className="row">
              
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />    
                  <Weather                                          ////when we press the button, getWeather(props) gets calle
                    cases={this.state.cases}           // value of all these are displayed by the weather component
                    deaths={this.state.deaths}
                    dangerzone={this.state.dangerzone}                  
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default WeatherPage; 
