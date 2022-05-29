import React, { useEffect, useState } from 'react';
import {} from '../Styles';
import { useParams } from 'react-router-dom';
import { DetailWrapper, Info, Button, Flex } from '../Styles';

const Recipe = () => {
	///////////////
	const params = useParams();
	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState('instructions');

	const fecthDetails = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
		);
		const dataDetails = await data.json();
		setDetails(dataDetails);
	};
	useEffect(() => {
		fecthDetails(params.id);
	}, [params.id]);
	////////////////
	return (
		<DetailWrapper>
			<div>
				<h2>{details.title}</h2>
				<img src={details.image} alt='' />
			</div>

			<Info>
				<Flex>
					<Button
						className={activeTab === 'instructions' ? 'active' : ''}
						onClick={() => setActiveTab('instructions')}
					>
						Instructions
					</Button>
					<Button
						className={activeTab === 'ingredients' ? 'active' : ''}
						onClick={() => setActiveTab('ingredients')}
					>
						Ingredients
					</Button>
				</Flex>
				{activeTab === 'instructions' && (
					<div>
						<p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
						<h4>Steps</h4>
						<p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
					</div>
				)}
				{activeTab === 'ingredients' && (
					<ul>
						{details.extendedIngredients.map((ingredient) => {
							return <li key={ingredient.id}>{ingredient.original}</li>;
						})}
					</ul>
				)}
			</Info>
		</DetailWrapper>
	);
};

export default Recipe;
