import React, { Component } from 'react';

class Study extends Component {
  render() {
    return (
		<div className="ui grid">
			<div id="form"></div>
			<div className="two column centered row margin">
				<div className="column">
					<div className="ui segment padding">
						<h2 className="colorPurple familyCode">Formations</h2>
						<div className="ui big relaxed divided list">
							<div className="item">
								<div className="content">
									<h3 className="header">Développement Web</h3>
									<div className="description">Simplon - IOT Valley de Labège - 2016-2017</div>
									<div className="description">Développement web et mobile avec JavaScript, PHP et SQL. Gestion de projet clients en équipe</div>
								</div>
							</div>
							<div className="item">
								<div className="content">
									<h3 className="header">Maitrise "Psychologie de la santé et des neurosciences"</h3>
									<div className="description">UT2J - Toulouse - 2015-2016</div>
									<div className="description">Mention Bien</div>
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

export default Study;