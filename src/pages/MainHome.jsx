import React from 'react';
import { Home, About, Projects, Experience, Contact, Hero } from '../sections';

const MainHome = () => {
	return (
		<div>
			<Home />
			<About />
			<Projects />
			<Experience />
			<Contact />
		</div>
	);
};

export default MainHome;
