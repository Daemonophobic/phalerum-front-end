import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Validator from '../helpers/Validator';
import LoadingPage from './LoadingPage';
import SettingsSidebar from '../components/SettingsSidebar';
import { useMatch } from 'react-router-dom';

const SettingsPage = () => {
	document.title = 'Settings - A-ware BSF';

	const isProfile = useMatch("/settings/profile");
	const isPreferences = useMatch("/settings/preferences");
	const isUsers = useMatch("/admin/users");
	const isRoles = useMatch("/admin/roles");

	const [showLoader, setShowLoader] = useState<boolean>(true);

	useEffect(() => {
		const validator = new Validator();
		validator
			.validateAuthenticated()
			.then((result) => {
				result
					? setShowLoader(false)
					: (window.location.href = '/auth/login');
			})
			.catch((_: Error) => {
				window.location.href = '/auth/login';
			});
	}, []);

	return (
		<>
			<LoadingPage showLoader={showLoader} />
			<div className="flex flex-col h-screen w-screen">
				<Header />
				<div className="flex w-full h-full">
					<SettingsSidebar isProfile={isProfile} isPreferences={isPreferences} isUsers={isUsers} isRoles={isRoles} />
					<div className="h-full w-full flex justify-center bg-defaultBackground z-0">
					</div>
				</div>
			</div>
		</>
	);
};

export default SettingsPage;