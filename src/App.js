import React, {Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/NavBarCoreComps/Home/Home";
import About from "./components/NavBarCoreComps/About";
import Contact from "./components/NavBarCoreComps/Contact";
import {BrowserRouter, Switch, Route} from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className='container-fluid'>
					<Navbar/>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/about' component={About}/>
						<Route path='/contact' component={Contact}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
