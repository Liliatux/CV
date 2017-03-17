import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
		<div className="ui grid">
			<div id="presentation"></div>
			<div className="three column centered row presentation">
				<div className="column">
				    <div class="image">
				    	<img className="ui medium circular image" src="./image/moi.jpg" alt="moi"/>
				    </div>
				</div>
				<div className="column familyCode">
					<h2 className="colorPurple familyCode">Hello World !</h2>
					<p>Bienvenue ma page web personnelle, vous trouverez ici mon CV et des informations à propos de moi.</p>
					<p>Je m'appelle Zélia, j'ai 24 ans et je suis actuellement <b>développeuse web</b> chez Simplon. D'un naturel calme, curieuse et ouverte d'esprit, je reste très exigente et perfectionniste dans mon travail.</p>
					<p>J'aime faire de la gestion de projet où je suis très à l'écoute de la demande du client et de l'équipe.</p>
				</div>
			</div>
			<div className="one column centered row background computer">
				<div className="center aligned column">
					<div className="ui huge inverted header familyCode">Développeuse Web junior</div>
					<div className="ui inverted header familyCode italic">"le code représente pour moi la création et l'innovation."</div>
				</div>
			</div>
		</div>
	);
  }
}

export default Header;