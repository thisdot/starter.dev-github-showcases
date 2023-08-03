import { Outlet } from 'react-router';
import Header from './components/header';

function App() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default App;
