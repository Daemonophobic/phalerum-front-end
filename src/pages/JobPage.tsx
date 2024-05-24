import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Validator from '../helpers/Validator';
import LoadingPage from './LoadingPage';
import { useParams } from 'react-router-dom';
// import CampaignDto from '../data/DataTransferObjects/CampaignDto';
import OutputPanel from '../components/OutputPanel';
import JobDto from '../data/DataTransferObjects/JobDto';

const JobPage = () => {
	const jobId = useParams().id;
	const [job, setJob] = useState<Partial<JobDto>>({});
	const [showLoader, setShowLoader] = useState<boolean>(true);

	useEffect(() => {
		document.title = 'Jobs - A-ware BSF';
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

		if (jobId === undefined) window.location.href = '/jobs';

		validator
			.validateJob(jobId ?? '')
			.then((result) => {
				if ('error' in result) window.location.href = '/jobs';
				document.title = `${result.jobName} - A-ware BSF`;
				setJob(result);
			})
			.catch((_: Error) => {
				window.location.href = '/jobs';
			});
	}, []);

	return (
		<>
			<LoadingPage showLoader={showLoader} />
			<div className="flex flex-col h-screen w-screen">
				<Header />
				<div className="flex w-full h-full">
					<Sidebar active="Jobs" />
					<div className="h-full w-full flex justify-center bg-defaultBackground z-0">
                        <OutputPanel job={job} />
					</div>
				</div>
			</div>
		</>
	);
};

export default JobPage;
