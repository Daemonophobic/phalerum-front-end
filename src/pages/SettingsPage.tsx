import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Validator from '../helpers/Validator';
import LoadingPage from './LoadingPage';
import SettingsSidebar from '../components/SettingsSidebar';
import { useMatch } from 'react-router-dom';
import CampaignSettings from '../components/CampaignSettings';

const SettingsPage = () => {
	document.title = 'Settings - A-ware BSF';

	const isCampaign = useMatch("/settings/campaign");

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
					<SettingsSidebar isCampaign={isCampaign} />
					<div className="h-full w-full flex justify-center bg-defaultBackground z-0">
						{isCampaign ? <CampaignSettings /> : ''}
					</div>
				</div>
			</div>
		</>
	);
};

export default SettingsPage;
