import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Validator from '../helpers/Validator';
import LoadingPage from './LoadingPage';

const HomePage = () => {
	document.title = 'Home - A-ware BSF';

	const [config, setConfig] = useState<{VITE_API_BASE_URL?: string, VITE_GRAFANA_URL?: string, VITE_DEFAULT_DASHBOARD_GRAFANA_ID?: string}>();

	const [showLoader, setShowLoader] = useState<boolean>(true);

	useEffect(() => {
		if ("RUNTIME_CONFIG" in window && typeof window.RUNTIME_CONFIG === "object" && window.RUNTIME_CONFIG !== null) {
			setConfig(window.RUNTIME_CONFIG);			
		} else {
			setConfig({VITE_GRAFANA_URL: import.meta.env.VITE_GRAFANA_URL, VITE_DEFAULT_DASHBOARD_GRAFANA_ID: import.meta.env.VITE_DEFAULT_DASHBOARD_GRAFANA_ID});
		}
	  }, []);

	useEffect(() => {
		const validator = new Validator();
		validator
			.validateAuthenticated()
			.then((result) => {
				result ?
					setShowLoader(false)
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
					<Sidebar active="Home" />
					<div className="h-full w-full flex justify-center bg-defaultBackground z-0">
						<iframe
							src={`${config?.VITE_GRAFANA_URL}/public-dashboards/${config?.VITE_DEFAULT_DASHBOARD_GRAFANA_ID}?orgId=1&theme=light`}
							className="w-full h-full"
						></iframe>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
