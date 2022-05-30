import Pages from './pages/Pages';
import Category from './components/Category';
import { HashRouter as Router } from 'react-router-dom';
import Search from './components/Search';
import Header from './components/Header';

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Search />
				<Category />
				<Pages />
			</Router>{' '}
		</div>
	);
}

export default App;
