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
									<div className="header">FrigoMeo</div>
									<div className="description">Single page application pour acheter sur tablette des friandises. Cette application est privée car faite pour CityMeo. <b>Technologies utilisées: ReactJs et Redux.</b></div>
								</div>
							</div>
							<div className="item">
								<i className="large github middle aligned icon"></i>
								<div className="content">
									<a className="header" href="https://github.com/Liliatux/Truk_IOT">Truk IOT</a>
									<div className="description">Progressive Web Apps pour orienter les visiteurs dans l'IOT Valley de Labège à Toulouse. <b>Technologies utilisées: ReactJS, Redux, SVG.</b></div>
									<div className="description"><a href="https://liliatux.github.io/Truk_IOT/"><i className="search icon"></i>Aperçu</a></div>
								</div>
							</div>
							<div className="item">
								<i className="large github middle aligned icon"></i>
								<div className="content">
									<a className="header" href="https://github.com/Liliatux/adap_ta_boite">Adap'ta Boite</a>
									<div className="description">Création d'un projet pour l'Adaptathon de Toulouse, permettant d'adapter les entreprises aux personnes en situation de handicap à travers la diffusion de vidéos. <b>Technologies utilisées: Semantic UI</b></div>
									<div className="description"><a href="https://liliatux.github.io/adap_ta_boite/"><i className="search icon"></i>Aperçu</a></div>
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