import { useEffect, useState } from 'react';
import { Gradient, Card, Wrapper } from '../Styles';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Veggie = () => {
	// ///////
	const [veggie, setVeggie] = useState([]);
	//
	useEffect(() => {
		getVeggie();
	}, []);

	const getVeggie = async () => {
		// Get the item from the Local Storage
		// Parse converts stings to an Array
		const check = localStorage.getItem('veggie');
		if (check) {
			setVeggie(JSON.parse(check));
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
			);
			const data = await api.json();
			// Set the response data to the local storage
			// Stringify converts Array to stings as Local Storage only store strings
			localStorage.setItem('veggie', JSON.stringify(data.recipes));
			setVeggie(data.recipes);
		}
	};

	return (
		<div>
			<Wrapper>
				<h3>Vegeterian Meals</h3>
				<Splide
					options={{
						perPage: 3,
						arrows: false,
						pagination: false,
						drag: 'free',
						gap: '3rem',
					}}
				>
					{veggie.map((recipe) => {
						return (
							<SplideSlide key={recipe.id}>
								<Card>
									<Link to={`/recipe/${recipe.id}`}>
										<p>{recipe.title}</p>
										<img src={recipe.image} alt='{recipe.title}' />
										<Gradient />
									</Link>
								</Card>
							</SplideSlide>
						);
					})}
				</Splide>
			</Wrapper>
		</div>
	);
};

export default Veggie;
