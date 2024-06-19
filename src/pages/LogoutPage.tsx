import { useEffect } from 'react';
import ApiClient from '../helpers/ApiClient';

const LogoutPage = () => {
	useEffect(() => {
		const apiClient = new ApiClient();
		apiClient.logoutUser().then(() => {
			window.location.href = '/auth/login';
		});
	});

	return <></>;
};

export default LogoutPage;
