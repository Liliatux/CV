import React, { Component } from 'react';
import './menu.css';

class Footer extends Component {
	render() {
		return(
			<div className="ui grid">
				<div className="one column centered row menuName">
					<div className="three columns white" id="mail">
						<i className="inverted mail outline icon"></i>geertszelia@gmail.com
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;