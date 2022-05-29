import styled from 'styled-components';

const Wrapper = styled.div `
	margin: 4rem 0rem;
`;

const Card = styled.div `
	min-height: 25rem;
	border-radius: 2rem;
	overflow: hidden;
	position: relative;

	img {
		border-radius: 2rem;
		position: absolute;
		left: 0;
		height: 100%;
		object-fit: cover;
	}
	p {
		position: absolute;
		z-index: 10;
		left: 50%;
		bottom: 20%;
		transform: translate(-50%, 20%);
		color: white;
		width: 100%;
		text-align: center;
		font-weight: 600;
		font-size: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Gradient = styled.div `
	z-index: 3;
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)); ;
`;

const List = styled.div `
	display: flex;
	justify-content: center;
	margin: 2rem 0rem;
	gap: 2rem;
`;

const ListItem = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	border-radius: 50%;
	background: rgba(0, 0, 0, 0.4);
	color: white;
`;
const Grid = styled.div `
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`;

const CardGrid = styled.div `
	img {
		width: 100%;
		border-radius: 2rem;
	}

	a {
		text-decoration: none;
	}

	h4 {
		text-align: center;
		padding: 1rem;
	}
`;

const FormStyle = styled.form `
	/* margin: 2rem auto; */

	div {
		margin: 2rem auto;
		position: relative;
		width: 70%;
	}

	input {
		display: block;
		border: none;
		background: linear-gradient(35deg, #494949, #313131);
		font-size: 1.5rem;
		padding: 1rem 3rem;
		border: none;
		outline: none;
		border-radius: 3rem;
		width: 100%;
		color: white;
	}

	svg {
		position: absolute;
		top: 50%;
		left: 0%;
		transform: translate(100%, -50%);
		color: white;
	}
`;

const DetailWrapper = styled.div `
	margin-top: 5rem;
	margin-bottom: 5rem;
	display: flex;
	width: 100%;
	.active {
		background: linear-gradient(35deg, #494949, #313131);
		color: white;
	}

	img {
		width: 300px;
		aspect-ratio: 1/1;
		background-position: center;
		background-size: cover;
		object-fit: cover;
	}
	h2 {
		margin-bottom: 2rem;
	}

	ul {
		margin-top: 2rem;
	}

	li {
		font-size: 1rem;
		line-height: 2rem;
	}

	p {
		font-size: 1rem;
		text-align: justify;
	}
`;
const Button = styled.button `
	padding: 0.5rem 1rem;
	color: #313131;
	background: white;
	border: 2px solid black;
	margin-right: 2rem;
	font-weight: 600;
`;

const Info = styled.div `
	margin-left: 4rem;
	h4 {
		margin: 1rem auto;
		text-align: center;
	}
`;

const Flex = styled.div `
	display: flex;
	margin-bottom: 1rem;
`;

export {
    Gradient,
    Card,
    Wrapper,
    List,
    ListItem,
    Grid,
    CardGrid,
    FormStyle,
    DetailWrapper,
    Button,
    Info,
    Flex,
};