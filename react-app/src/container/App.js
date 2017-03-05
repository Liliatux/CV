import React from 'react';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Project from '../components/Project';
import Skill from '../components/Skill';
import Exp from '../components/Exp';
import Study from '../components/Study';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer.js';

const App = () => (
	<div>
	  <Menu />
	  <Header />
	  <Project />
	  <Skill />
	  <Exp />
	  <Study />
	  <Accordion />
	  <Footer />
	</div>
);

export default App;