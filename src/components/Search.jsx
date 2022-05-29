import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FormStyle } from '../Styles';

const Search = () => {
	////////////
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/searched/${input}`);
	};

	///////////////
	return (
		<FormStyle onSubmit={handleSubmit}>
			<div>
				<FaSearch />
				<input
					onChange={(e) => setInput(e.target.value)}
					type='text'
					value={input}
				/>
			</div>
		</FormStyle>
	);
};

export default Search;
