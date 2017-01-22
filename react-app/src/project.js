import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
		<div className="ui grid">
			<div id="project"></div>
			<div className="two column centered row margin">
				<div className="column">
					<div className="ui segment padding">
						<h2 className="colorPurple familyCode">Projets</h2>
						<div className="ui big relaxed divided list">
							<div className="item">
								<i className="large github middle aligned icon"></i>
								<div className="content">
									<a className="header" href="https://github.com/Liliatux/calendar-php">Calendrier</a>
									<div className="description">Calendrier qui s'affiche en quadrillage avec jour selon le mois et l'année selectionnés. Techno: PHP</div>
								</div>
							</div>
							<div className="item">
								<i className="large github middle aligned icon"></i>
								<div className="content">
									<a className="header" href="https://liliatux.github.io/Truk_IOT/">Truk IOT</a>
									<div className="description">Dévelopement d'une PWA (Progressive Web Apps) pour orienter les visiteurs dans l'IOT Valley de Labège à Toulouse. Techno: JS, React, SVG</div>
								</div>
							</div>
							<div className="item">
								<i className="large github middle aligned icon"></i>
								<div className="content">
									<a className="header" href="https://liliatux.github.io/adap_ta_boite/">Adap'ta Boite</a>
									<div className="description">Création d'un projet pour l'Adaptathon permettant d'adapter les entreprises aux personnes en situation de handicap à travers la diffusion de vidéos. Techno: Semantic UI</div>
								</div>
							</div>
							<div className="item">
								<i className="large github middle aligned icon"></i>
								<div className="content">
									<a className="header" href="https://liliatux.github.io/What_a_day/">What a day</a>
									<div className="description">Développement d'une page web permettant de trouver le jour de la semaine correspondant à la date entrée par l'utilisateur. Techno: JS</div>
								</div>
							</div>
							<div className="item">
								<i className="large github middle aligned icon"></i>
								<div className="content">
									<a className="header" href="https://liliatux.github.io/Tomato/">Tomato Timer</a>
									<div className="description">Applique la technique du Pomodoro à travers un minuteur par défaut de 25 minutes ou selon le mode peut aller de 5 à 10 minutes. Techno: JS, Semantic UI</div>
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

export default Project;