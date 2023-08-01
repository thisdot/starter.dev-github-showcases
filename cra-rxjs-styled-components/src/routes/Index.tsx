import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const Index = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default Index;
