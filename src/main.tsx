import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './pages/ErrorPage';
import LogoutPage from './pages/LogoutPage';
import AgentsPage from './pages/AgentsPage';
import CampaignsPage from './pages/CampaignsPage';
import CampaignPage from './pages/CampaignPage';
import JobsPage from './pages/JobsPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/agents',
		element: <AgentsPage />,
	},
	{
		path: '/campaigns',
		element: <CampaignsPage />,
	},
	{
		path: '/campaigns/:id',
		element: <CampaignPage />,
	},
	{
		path: '/jobs',
		element: <JobsPage />,
	},
	{
		path: '/auth/login',
		element: <LoginPage />,
	},
	{
		path: '/auth/logout',
		element: <LogoutPage />,
	},
	{
		path: '/*',
		element: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
