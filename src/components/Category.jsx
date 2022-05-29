import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiNigeria } from 'react-icons/gi';
import { List } from '../Styles';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Category = () => {
	return (
		<section>
			<List>
				<SLink to={'/cuisine/Italian'}>
					<FaPizzaSlice />
					<h4>Italian</h4>
				</SLink>
				<SLink to={'/cuisine/American'}>
					<FaHamburger />
					<h4>American</h4>
				</SLink>
				<SLink to={'/cuisine/Thai'}>
					<GiNoodles />
					<h4>Thai Food</h4>
				</SLink>
				<SLink to={'/cuisine/African'}>
					<GiNigeria />
					<h4>African</h4>
				</SLink>
			</List>
		</section>
	);
};

const SLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	border-radius: 50%;
	background: linear-gradient(35deg, #494949, #313131);
	margin-right: 2rem;
	text-decoration: none;
	width: 6rem;
	height: 6rem;
	cursor: pointer;
	transform: scale(0.8);

	h4 {
		color: white;
		font-size: 0.8rem;
	}

	svg {
		color: white;
		font-size: 1.5rem;
	}

	&.active {
		background: linear-gradient(to right, #f27171, #e94057);

		svg {
			color: white;
		}
		h4 {
			color: white;
		}
	}
`;

export default Category;
