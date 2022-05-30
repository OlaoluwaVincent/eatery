import React, { useEffect, useState } from 'react';
import { CardGrid, Grid } from '../Styles';
// import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const Cuisine = () => {
	const [cuisine, setCuisine] = useState([]);
	let params = useParams();
	///
	const getCuisine = async (name) => {
		// const check = localStorage.getItem('popular');
		// setCuisine(JSON.parse(check));

		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
		);
		const recipes = await data.json();
		setCuisine(recipes.results);
	};

	useEffect(() => {
		getCuisine(params.type);
	}, [params.type]);
	////////
	/////////
	return (
		<Grid>
			{cuisine.map((item) => {
				return (
					<CardGrid key={item.id}>
						<Link to={`/recipe/${item.id}`}>
							<img src={item.image} alt='' />
							<h4>{item.title}</h4>
						</Link>
					</CardGrid>
				);
			})}
		</Grid>
	);
};

export default Cuisine;
