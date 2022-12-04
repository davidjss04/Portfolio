import React from 'react';
import { Home, About, Projects, Experience, Contact } from '../sections';

const MainHome = () => {
	return (
		<>
			<Home />
			<About />
			<Experience />
			<Projects />
			<Contact />
		</>
	);
};

export default MainHome;
