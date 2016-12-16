import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';
import Header from './header';
import Project from './project';
import Skill from './skill';
import Exp from './exp';
import Study from './study';
import Interest from './interest';
import Footer from './footer.js';
import './index.css';

ReactDOM.render(
	<div>
	  <Menu />
	  <Header />
	  <Project />
	  <Skill />
	  <Exp />
	  <Study />
	  <Interest />
	  <Footer />
	</div>

  ,document.getElementById('root')
);
