
import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {Alert} from "react-bootstrap";

class DevBasicInfo extends Component {

	static styles = {
		cardHeaderShowToggleStyle: {

			cursor: 'pointer'
		}
	};

	constructor(props) {
		super(props);
		this.state = {
			showDetails: false
		}
	}

	handleToggleShowDetails = () => {
		this.setState((prevState) => ({
			...prevState,
			showDetails: !prevState.showDetails
		}))
	};

	render() {
		let cardDetails;
		if (this.state.showDetails) {
			cardDetails = (
				<div className="card-body">
					<h5 className="card-title">
						Little intro
					</h5>
					<div className="card-text">
						<p>
							Workout, flex and stress those skills you've got on this platform.
							We're just a group of developers who love to code, build and try out
							crazy ideas. Only way to learn and grow as a <b>dev</b> is by <b>building</b> and
							constantly building. Want to try out some new ideas, for your react project feel free to implement
							and share with the world what you'll like them to see and interact with.
						</p>
						<hr/>
						<p>
							That said, explore our app collection. Happy Hacking <kbd style={{color: 'orange'}}>&lt;/&gt;</kbd> and kick ass!
						</p>
					</div>
				</div>
			)
		}
		return (
			<div className="card text-white bg-dark text-white mb-3">
				<div style={DevBasicInfo.styles.cardHeaderShowToggleStyle}
					onClick={this.handleToggleShowDetails}>
					<div className='card-header'>
						<span>
							<span className='float-left'>
								{
									!this.state.showDetails ? (
										<FontAwesomeIcon icon={faArrowRight}/>
									) : (
										<FontAwesomeIcon icon={faArrowDown}/>
									)
								}
							</span>
							<span className='card-title ml-4 font-weight-bold'>
								Hey, you a web developer like me ?
							</span>
						</span>
					</div>
				</div>
				{cardDetails}
			</div>
		);
	}
}

export default DevBasicInfo;