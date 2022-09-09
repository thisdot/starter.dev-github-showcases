import { Navigate, useLocation } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants/auth.constants';

export default function AuthGuard({ children }: { children: JSX.Element }) {
	const location = useLocation();

	const isAuthenticated = sessionStorage.getItem(AUTH_TOKEN);
	if (!isAuthenticated) {
		return <Navigate to="/signin" state={{ from: location }} />;
	}
	return children;
}
