import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './pages/ErrorPage';
import LogoutPage from './pages/LogoutPage';
import AgentsPage from './pages/AgentsPage';
import CampaignsPage from './pages/CampaignsPage';
import CampaignPage from './pages/CampaignPage';
import JobsPage from './pages/JobsPage';
import SettingsPage from './pages/SettingsPage';
import * as Sentry from "@sentry/react";

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
		path: '/settings',
		element: <Navigate to="/settings/profile" />,
	},
	{
		path: '/settings/*',
		element: <SettingsPage />,
	},
	{
		path: '/*',
		element: <ErrorPage />,
	},
]);

Sentry.init({
	dsn: "https://7090e747a5e05d4c2c315092213e1117@sentry.stickybits.red/7",
	integrations: [
	  Sentry.browserTracingIntegration(),
	  Sentry.replayIntegration(),
	],
	// Performance Monitoring
	tracesSampleRate: 1.0, //  Capture 100% of the transactions
	// Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
	tracePropagationTargets: [/^https:\/\/phalerum\.stickybits\.red\/api\//],
	// Session Replay
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
