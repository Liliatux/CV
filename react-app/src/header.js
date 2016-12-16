import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
		<div className="ui grid">
			<div id="presentation"></div>
			<div className="two column centered row presentation">
				<div className="column familyCode">
					<h2 className="colorPurple familyCode">Hello World !</h2>
					<p className="italic">Bienvenue ma page web personnelle, vous trouverez ici mon CV et des informations à propos de moi.</p>
					<p className="italic">Je m'appelle Zélia, j'ai 24 ans et je suis actuellement <b>développeuse web</b> chez Simplon. D'un naturel calme, curieuse et ouverte d'esprit, je reste très exigente et perfectionniste dans mon travail.</p>
					<p className="italic">Captivée par la nature et le numérique j'aimerai utiliser mon code pour la sauvegarde de la biodiversité.</p>
				</div>
			</div>
			<div className="one column centered row background computer">
				<div className="center aligned column">
					<div className="ui huge inverted header familyCode">Développeuse Web junior</div>
					<div className="ui inverted header familyCode italic">"le code représente pour moi la création et l'innovation vers un monde meilleurs."</div>
				</div>
			</div>
		</div>
	);
  }
}

export default Header;