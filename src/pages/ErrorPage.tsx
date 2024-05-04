import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	document.title = '404 Not Found - A-ware BSF';

	// For generating a fake correlation ID (It looks better)
	const makeid = (length: number) => {
		let result = '';
		const characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < length) {
			result += characters.charAt(
				Math.floor(Math.random() * charactersLength)
			);
			counter += 1;
		}
		return result;
	};

	return (
		<>
			<Link
				className="font-inter absolute left-1 top-1 hover:left-2 transition-all"
				to="/"
			>
				<FontAwesomeIcon icon={faArrowLeft} /> Back to home
			</Link>
			<div className="h-screen w-screen flex flex-col justify-center items-center text-center">
				<h1 className="font-inter font-bold text-3xl">Error 404💀</h1>
				<div className="flex flex-col justify-center items-center mt-3">
					<p className="font-inter text-lg">
						The requested page at{' '}
						<b className="bg-red-100 rounded-lg pl-1 font-inter pr-1 font-normal text-red-500">
							{location.pathname}
						</b>{' '}
						was not found
					</p>
					<p className="font-inter text-lg">
						🔗Link to{' '}
						<Link
							className="bg-red-100 rounded-sm pl-1 font-inter pr-1 text-red-500"
							to="/"
						>
							/
						</Link>
					</p>
					<p className="font-inter text-lg">
						📝Correlation ID:{' '}
						<b className="bg-red-100 rounded-lg pl-1 font-inter pr-1 font-normal text-red-500">
							{makeid(32)}
						</b>
					</p>
				</div>
			</div>
		</>
	);
};

export default ErrorPage;
