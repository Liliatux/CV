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
									<h3 className="ui header">Langages de programmation</h3>
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
													<img className="ui avatar image" src="./image/php.jpg" alt="php"/>
													<div className="content">
														<div className="header">PHP</div>
													</div>
												</div>
												<div className="item">
													<img className="ui avatar image" src="./image/sql.png" alt="sql"/>
													<div className="content">
														<div className="header">SQL</div>
													</div>
												</div>
											</div>
										</div>
										<div className="item">
											<h3 className="ui header">Frameworks et Librairies</h3>
											<div className="ui big horizontal list">
												<div className="item">
													<img className="ui avatar image" src="./image/jquery.png" alt="jquery"/>
													<div className="content">
														<div className="header">jQuery</div>
													</div>
												</div>
												<div className="item">
													<img className="ui avatar image" src="./image/react.png" alt="react"/>
													<div className="content">
														<div className="header">ReactJS</div>
													</div>
												</div>
												
												<div className="item">
													<img className="ui avatar image" src="./image/laravel.png" alt="laravel"/>
													<div className="content">
														<div className="header">Laravel</div>
													</div>
												</div>
											</div>
										</div>
										<div className="item">
											<h3 className="ui header">Outils</h3>
											<div className="ui big horizontal list">
												<div className="item">
													<img className="ui avatar image" src="./image/git.png" alt="git"/>
													<div className="content">
														<div className="header">Git</div>
													</div>
												</div>
												<div className="item">
													<img className="ui avatar image" src="./image/mysql.png" alt="mysql"/>
													<div className="content">
														<div className="header">MySQL</div>
													</div>
												</div>
												<div className="item">
													<img className="ui avatar image" src="./image/babel.png" alt="babel"/>
													<div className="content">
														<div className="header">Babel</div>
													</div>
												</div>
												<div className="item">
													<img className="ui avatar image" src="./image/semantic.png" alt="semantic"/>
													<div className="content">
														<div className="header">Semantic UI</div>
													</div>
												</div>
												<div className="item">
													<img className="ui avatar image" src="./image/sass.png" alt="sass"/>
													<div className="content">
														<div className="header">SASS</div>
													</div>
												</div>
												<div className="item">
													<img className="ui avatar image" src="./image/kanban.png" alt="kanban"/>
													<div className="content">
														<div className="header">Kanban</div>
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