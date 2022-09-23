import { Outlet } from 'react-router';
import Header from './components/header';
import { UserProvider } from './context/UserProvider';

function App() {
	return (
		<UserProvider>
			<Header />
			<Outlet />
		</UserProvider>
	);
}

export default App;
