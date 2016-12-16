import React, { Component } from 'react';
import './menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="ui top fixed massive inverted pointing borderless menu menuName familyCode">
        <a className="item sizeMenu block" href="#presentation">
          <h2 className="header familyCode">Zélia Geerts</h2>
          <span className="job">Dévelopeuse Web</span>
        </a>
        <a className="item" href="#project">Projets</a>
        <a className="item" href="#comp">Compétences</a>
        <a className="item" href="#exp">Expériences</a>
        <a className="item" href="#form">Formations</a>
        <a className="item" href="#interest">Intérêts</a>
        <div className="right menu">
          <a className="item" href="https://github.com/Liliatux">
            <i className="github large icon"></i>
          </a>
          <a className="item" href="https://fr.linkedin.com/in/zélia-geerts-835b47134">
            <i className="linkedin large icon"></i>
          </a>
          <a className="item" href="mailto:geertszelia@gmail.com">
            <i className="mail outline large icon"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;
