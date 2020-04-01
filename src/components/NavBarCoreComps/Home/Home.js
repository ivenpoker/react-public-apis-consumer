
import React, {Component} from "react";
import homeBgImg from '../../../images/app-home-bg.jpg';
import DevBasicInfo from "./sub-comps/DevBasicInfo";
import {Alert} from "react-bootstrap";

class Home extends Component {
	render() {
		const style = {
			backgroundImage: `url(${homeBgImg})`
		};
		return (
			<div className='container'>
				<div style={style} className='jumbotron bg-dark text-white text-center'>
					<h4>Public APIS Consumer <kbd style={{color: 'orange'}}>react</kbd></h4>
				</div>
				<div className='row'>
					<div className='col'/>
					<div className='col-9'>
						<DevBasicInfo/>
					</div>
					<div className='col'/>
				</div>
			</div>
		);
	}
}

export default Home