import React, { Component } from 'react';
import './header.css';

class Interest extends Component {
	constructor() {
		super();
		this.state = {
			title: "title",
			content:"content"		
		}
	}

	change() {
		if(this.state.title === "title") {
			this.setState({
				title: "title active",
				content: "content active"
			});
		} 
		if(this.state.title === "title active") {
				this.setState({
				title: "title",
				content:"content"
			});
		}
	}

	render() {
		return(
			<div className="ui centered grid background scenary">
				<div id="interest"></div>
				<div className="one column row">
					<div className="center aligned column">
						<div className="ui huge inverted header familyCode">Centres D'intérêts</div>
					</div>
				</div>
				<div className="two column center aligned row margin">
					<div className="column">
						<div className="ui styled accordion">
							<div className={this.state.title} onClick={this.change.bind(this)}>
								<i className="dropdown icon"></i>
								Sport
							</div>
							<div className={this.state.content}>
								<p>Parce que s'entretenir c'est important pour le mental et le physique, j'aime pratiquer tous types de sports: en individuel (randonnée, running, escalade, équitation), en équipe (basket) ou du combat (boxe, self-defense).</p>
							</div>
							<div className={this.state.title} onClick={this.change.bind(this)}>
								<i className="dropdown icon"></i>
								Jeux
							</div>
							<div className={this.state.content}>
								<p>Ayant grandi avec la nintendo 64, et le début des jeux vidéo multijoueurs en ligne, j'aime jouer avec mes amis à des jeux de stratégie (age of empire), fps (CSGO) ou MOBA (League of Legend).
								J'aime aussi les jeux stratégique (échec) et de plateau (7wonders)</p>
							</div>
							<div className={this.state.title} onClick={this.change.bind(this)}>
								<i className="dropdown icon"></i>
								Animaux
							</div>
								<div className={this.state.content}>
								<p>Mes grands parents étant des fermiers, j'ai toujours vécut avec les animaux. Je me plait à m'occuper et prendre soin d'eux, notamment de mes deux chats Sirius et Tifa. Je fais également des dons aux associations de protection animal.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Interest;