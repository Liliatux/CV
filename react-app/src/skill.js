import React, { Component } from 'react';

class Skill extends Component {
  render() {
    return (
    	<div className="ui grid">
			<div id="comp"></div>
			<div className="two column centered row margin">
				<div className="column">
					<div className="ui segment padding">
						<h2 className="colorPurple familyCode">Compétences</h2>
						<div className="ui big relaxed divided list">
							<div className="item">
								<div className="content">
									<h3 className="ui header">Web</h3>
									<div className="ui middle aligned list">
										<div className="item">
											<div className="ui big horizontal list">
												<div className="item">
													<img className="ui avatar image" src="./image/js.png" alt="js"/>
													<div className="content">
														<div className="header">JavaScript</div>
													</div>
												</div>
												<div className="item">
													<img className="ui avatar image" src="./image/nodejs.png" alt="nodeJs"/>
													<div className="content">
														<div className="header">Node JS</div>
													</div>
												</div>
												<div className="item">
													<img className="ui avatar image" src="./image/react.png" alt="react"/>
													<div className="content">
														<div className="header">React</div>
													</div>
												</div>
											</div>
										</div>
										<div className="item">
											<div className="ui big horizontal list">
												<div className="item">
													<img className="ui avatar image" src="./image/css.png" alt="css"/>
													<div className="content">
														<div className="header">CSS</div>
													</div>
												</div>
												<div className="item">
													<img className="ui avatar image" src="./image/semantic.png" alt="semantic"/>
													<div className="content">
														<div className="header">Semantic</div>
													</div>
												</div>
												<div className="item">
													<img className="ui avatar image" src="./image/sass.png" alt="sass"/>
													<div className="content">
														<div className="header">SASS</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="content">
									<h3 className="ui header">Langues Vivantes</h3>
									<div className="ui middle aligned list">
										<div className="item">
											<img className="ui avatar image" src="./image/fr.png" alt="js"/>
											<div className="content">
												<div className="header">Français langue maternelle</div>
											</div>
										</div>
										<div className="item">
											<img className="ui avatar image" src="./image/en.png" alt="js"/>
											<div className="content">
												<div className="header">Anglais niveau B1</div>
											</div>
										</div>
										<div className="item">
											<img className="ui avatar image" src="./image/es.png" alt="js"/>
											<div className="content">
												<div className="header">Espagnol niveau A2</div>
											</div>
										</div>
									</div>	
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

export default Skill;