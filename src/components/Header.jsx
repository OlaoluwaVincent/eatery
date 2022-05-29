import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

const Header = () => {
	return (
		<Nav>
			<GiKnifeFork />
			<Logo to={'/'}>Ola's Menu</Logo>
		</Nav>
	);
};

const Logo = styled(Link)`
	text-decoration: none;
	font-size: 1.5rem;
	font-weight: 400;
	font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
	padding-top: 2rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	svg {
		font-size: 2rem;
	}
`;

export default Header;
