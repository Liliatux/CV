import React, {Component} from 'react';
import Interest from './Interest';

class Accordion extends Component {
	constructor() {
		super();
		this.state={
			sport: false,
			games: false,
			animals: false,
			nature: false
		}
		this._toggle = this._toggle.bind(this)
	}

	_toggle(e){
		let state = this.state;
		for(var prop in state) {
			if(prop !== e.target.id){
				state[prop] = false;
			}
			state[e.target.id] = !state[e.target.id] ;
		};
		this.setState({
			state
		});
	}

	render(){
		return(
			<div className="ui centered grid background scenary">
				<div className="one column row">
					<div className="center aligned column">
						<div id="interest" className="ui huge inverted header familyCode">Centres D'intérêts</div>
					</div>
				</div>
				<div className="two column center aligned row margin">
					<div className="ui inverted accordion">
				        <Interest title="Sport"
				          content="Parce que s'entretenir c'est important pour le mental et le physique, j'aime pratiquer tous types de sports (en individuel [running, escalade, équitation], en équipe [basket] ou du combat [boxe, self-defense])."
				          status={this.state.sport}
				          toggle={this._toggle}
				          id='sport'
				        />
				        <Interest title="Jeux"
				          content="Ayant grandi avec la nintendo 64, et le début des jeux vidéo multijoueurs en ligne, j'aime jouer avec mes amis à des jeux de stratégie (age of empire), fps (CSGO) ou MOBA (League of Legend). J'aime aussi les jeux stratégique (échec) et de plateau (7wonders)"
				          status={this.state.games}
				          toggle={this._toggle}
				          id='games'
				        />
				        <Interest title="Animaux"
				          content="Mes grands parents étant des fermiers, j'ai toujours vécut avec les animaux. Je me plait à m'occuper et prendre soin d'eux, notamment de mes deux chats Sirius et Tifa. Je fais également des dons aux associations de protection animal."
				          status={this.state.animals}
				          toggle={this._toggle}
				          id="animals"
				        />
				        <Interest title="Nature"
				          content="Ce que je préfère c'est partir en randonnée en pleine nature, surtout dans les Pyrénées. Mon rêve serait de découvrir les différentes natures du monde."
				          status={this.state.nature}
				          toggle={this._toggle}
				          id="nature"
				        />
		     		</div>
		     	</div>
		    </div>
		)
	}
}

export default Accordion;