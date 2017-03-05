import React, { Component } from 'react';

class Exp extends Component {
  render() {
    return (
		<div className="ui grid">
			<div id="exp"></div>
			<div className="two column centered row margin">
				<div className="column">
					<div className="ui segment padding">
						<h2 className="colorPurple familyCode">Expériences</h2>
						<div className="ui big relaxed divided list">
							<div className="item">
								<div className="content">
									<h3 className="ui header">Adaptathon</h3>
									<div className="description">Ambition Toulouse Métropole - 2016</div>
									<div className="description">Création d'un projet en équipe pour adapter les entreprises au handicap.</div>
								</div>
							</div>
							<div className="item">
								<div className="content">
									<h3 className="ui header">Hour of code</h3>
									<div className="description">Simplon - Toulouse - 2016-2017</div>
									<div className="description">Animation de "l'heure de code" auprès de collègiens</div>
								</div>
							</div>
							<div className="item">
								<div className="content">
									<h3 className="ui header">Stage en Psychologie</h3>
									<div className="description">2014-2016</div>
									<div className="description">ARPADE Toulouse</div>
									<div className="description">Clinique Eugénie de Pierrefonds</div>
								</div>
							</div>
						</div>		
					</div>	
				</div>
			</div>
		</div>
		);
  	}
}

export default Exp;