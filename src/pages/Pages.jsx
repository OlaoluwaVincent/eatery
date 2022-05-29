import React from 'react';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';

function Pages() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/cuisine/:type' element={<Cuisine />} />
			<Route path='/Searched/:search' element={<Searched />} />
			<Route path='/Recipe/:id' element={<Recipe />} />
		</Routes>
	);
}

export default Pages;
