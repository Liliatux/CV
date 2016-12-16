import React, { Component } from 'react';
import './header.css';

class Interest extends Component {
	render() {
		return(
			<div className="ui grid">
				<div id="interest"></div>
				<div className="one column centered row background scenary margin">
					<div className="center aligned column familyCode">
						<div className="ui huge inverted header familyCode">Centres D'intérêts</div>
						<div className="ui styled accordion margin">
							<div className="title">
								<i className="dropdown icon"></i>
								Sport
							</div>
							<div className="content">
								<p>J'aime pratiquer tous types de sports du combat (self-defense, Kung Fu), de l'équipe (basket) ou de l'individuel (running, équitation, yoga).</p>
							</div>
							<div className="title">
								<i className="dropdown icon"></i>
								Photographie
							</div>
							<div className="content">
								<p>Afin de garder une trace des beautés de la nature je me plais à photographier tous types de paysages.</p>
							</div>
							<div className="title">
								<i className="dropdown icon"></i>
								Animaux
							</div>
								<div className="content">
								<p>Parce que les animaux sont fragiles, il faut les protéger de la dangerosité du monde. Je viens donc à leur aide dès que je le peux à travers des actions de sauvetages et dons pour des associations.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Interest;