import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardGrid, Grid } from '../Styles';
import { Link } from 'react-router-dom';

const Searched = () => {
	/////////
	const [search, setSearched] = useState([]);
	let params = useParams();

	const getSearched = async (name) => {
		// const check = localStorage.getItem('popular');
		// setSearched(JSON.parse(check));

		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
		);
		const recipes = await data.json();
		setSearched(recipes.results);
	};

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);

	//////////////
	return (
		<section>
			<Grid>
				{search.map((res) => {
					return (
						<CardGrid key={res.id}>
							<Link to={`/recipe/${res.id}`}>
								<img src={res.image} alt='' />
								<h4>{res.title}</h4>
								<p>{res.details}</p>
							</Link>
						</CardGrid>
					);
				})}
			</Grid>
		</section>
	);
};

export default Searched;
