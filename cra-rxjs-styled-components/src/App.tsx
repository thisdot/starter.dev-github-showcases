import { Outlet } from 'react-router';
import Header from './components/header/Header';
import { UserProvider } from './context/UserProvider';

function App() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default App;
