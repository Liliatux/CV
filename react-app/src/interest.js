import React, { Component } from 'react';

class Interest extends Component {
	constructor() {
		super();
		this.state = {
			sportTitle: "title",
			sportContent:"content",	
			gamesTitle: "title",
			gamesContent:"content",
			animalsTitle: "title",
			animalsContent:"content",
			natureTitle:"title",
			natureContent:"content"	
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
					<div className="ui inverted accordion">
						<div className={this.state.sportTitle} onClick={this.sport.bind(this)}>
							<i className="dropdown icon"></i>
							Sport
						</div>
						<div className={this.state.sportContent}>
							<p className="white">Parce que s'entretenir c'est important pour le mental et le physique, j'aime pratiquer tous types de sports (en individuel [running, escalade, équitation], en équipe [basket] ou du combat [boxe, self-defense]).</p>
						</div>
						<div className={this.state.gamesTitle} onClick={this.games.bind(this)}>
							<i className="dropdown icon"></i>
							Jeux
						</div>
						<div className={this.state.gamesContent}>
							<p className="white">Ayant grandi avec la nintendo 64, et le début des jeux vidéo multijoueurs en ligne, j'aime jouer avec mes amis à des jeux de stratégie (age of empire), fps (CSGO) ou MOBA (League of Legend).
							J'aime aussi les jeux stratégique (échec) et de plateau (7wonders)</p>
						</div>
						<div className={this.state.animalsTitle} onClick={this.animals.bind(this)}>
							<i className="dropdown icon"></i>
							Animaux
						</div>
							<div className={this.state.animalsContent}>
							<p className="white">Mes grands parents étant des fermiers, j'ai toujours vécut avec les animaux. Je me plait à m'occuper et prendre soin d'eux, notamment de mes deux chats Sirius et Tifa. Je fais également des dons aux associations de protection animal.</p>
						</div>
						<div className={this.state.natureTitle} onClick={this.nature.bind(this)}>
							<i className="dropdown icon"></i>
							Nature
						</div>
						<div className={this.state.natureContent}>
							<p className="white">Ce que je préfère c'est partir en randonnée en pleine nature, surtout dans les Pyrénées. Mon rêve serait de découvrir les différentes natures du monde.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	sport() {
		if(this.state.sportTitle === "title") {
			this.setState({
				sportTitle: "title active",
				sportContent: "content active"
			});
		} 
		if(this.state.sportTitle === "title active") {
				this.setState({
				sportTitle: "title",
				sportContent:"content"
			});
		}
	}

	games() {
		if(this.state.gamesTitle === "title") {
			this.setState({
				gamesTitle: "title active",
				gamesContent: "content active"
			});
		} 
		if(this.state.gamesTitle === "title active") {
				this.setState({
				gamesTitle: "title",
				gamesContent:"content"
			});
		}
	}

	animals() {
		if(this.state.animalsTitle === "title") {
			this.setState({
				animalsTitle: "title active",
				animalsContent: "content active"
			});
		} 
		if(this.state.animalsTitle === "title active") {
				this.setState({
				animalsTitle: "title",
				animalsContent:"content"
			});
		}
	}

	nature() {
		if(this.state.natureTitle === "title") {
			this.setState({
				natureTitle: "title active",
				natureContent: "content active"
			});
		} 
		if(this.state.natureTitle === "title active") {
				this.setState({
				natureTitle: "title",
				natureContent:"content"
			});
		}
	}
}

export default Interest;