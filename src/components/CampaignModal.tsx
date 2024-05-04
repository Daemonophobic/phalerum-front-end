import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import { generateString } from '../helpers/Utils';
import { useEffect, useRef, useState } from 'react';
import ApiClient from '../helpers/ApiClient';
import OsEnum from '../data/enums/OsEnum';

const CampaignModal = (props: { isOpen: boolean; setIsOpen: any }) => {
	Modal.setAppElement('#root');

	const apiClient = new ApiClient();

	const [detailsSubmitted, setDetailsSubmitted] = useState(false);
	const [detailsValid, setDetailsValid] = useState(true);
	const [showAlert, setShowAlert] = useState(false);
	const [showError, setShowError] = useState(false);
	const [message, setMessage] = useState<string>(
		'Something went wrong, please contact an administrator'
	);

	const campaignName = useRef<HTMLInputElement>(null);
	const campaignDescription = useRef<HTMLInputElement>(null);
	const active = useRef<HTMLInputElement>(null);
	const startDate = useRef<HTMLInputElement>(null);
	const endDate = useRef<HTMLInputElement>(null);

	const checkDetails = () => {
		if (
			campaignName.current === null ||
			campaignDescription.current === null ||
			active.current === null ||
			startDate.current === null ||
			endDate.current === null
		) {
			setDetailsValid(false);
			return;
		}

		if (
			campaignName.current.value === '' ||
			campaignDescription.current.value === '' ||
			active.current.value === '' ||
			startDate.current.value === '' ||
			endDate.current.value === ''
		) {
			setDetailsValid(false);
			return;
		}

		setDetailsValid(true);
	};

	const submitDetails = async () => {
		setDetailsSubmitted(true);

		if (
			campaignName.current === null ||
			campaignDescription.current === null ||
			active.current === null ||
			startDate.current === null ||
			endDate.current === null
		) {
			// setShowError(true);
			setDetailsSubmitted(false);
			return;
		}

		if (
			campaignName.current.value === '' ||
			campaignDescription.current.value === '' ||
			active.current.value === '' ||
			startDate.current.value === '' ||
			endDate.current.value === ''
		) {
			// setShowError(true);
			setDetailsSubmitted(false);
			return;
		}

		// const result = await apiClient.addAgent({
		// 	agentName: agentName.current.value,
		// 	master: master.current.value === 'true',
		// 	os:
		// 		os.current.value === OsEnum.Linux
		// 			? OsEnum.Linux
		// 			: OsEnum.Windows,
		// });
		// if ('error' in result) {
		// 	setMessage(result.error);
		// 	setShowError(true);
		// 	setDetailsSubmitted(false);
		// 	return;
		// }

		// setTimeout(() => {
		// 	props.setIsOpen(false);
		// 	setDetailsSubmitted(false);
		// 	setDetailsValid(false);
		// }, 500);
	};

	useEffect(() => {
		if (showAlert === true) {
			setTimeout(() => {
				setShowAlert(false);
			}, 3500);
		}
	}, [showAlert]);

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			borderRadius: '10px',
		},
	};

	return (
		<Modal style={customStyles} isOpen={props.isOpen}>
			<h1
				className={`absolute font-inter bg-[#F95B6A] text-white p-2 rounded-lg left-1/2 transition-all opactiy-100 -translate-x-1/2 top-4 ${showError ? '' : 'opacity-0'}`}
			>
				{message}
			</h1>
			<div className="flex flex-col space-y-2">
				<div className="w-96 flex items-center justify-between">
					<h1 className="font-inter font-semibold text-xl">
						Add Campaign
					</h1>
					<FontAwesomeIcon
						className="cursor-pointer"
						icon={faClose}
						onClick={() => props.setIsOpen(false)}
					/>
				</div>
				{/* <label htmlFor="agentName" className="font-inter text-lg">
					Agent Name
				</label>
				<input
					ref={agentName}
					onChange={checkDetails}
					defaultValue={generateString(16)}
					id="agentName"
					className={`bg-[#F9F9F9] w-full pl-3 pr-3 border-2 ${showAlert ? 'ring-2 ring-red-600' : ''} transition-all focus:ring-2 outline-none border-slate-200 rounded-lg h-10 ${detailsSubmitted ? 'text-gray-400' : ''}`}
					disabled={detailsSubmitted}
				/>
				<label htmlFor="master" className="font-inter text-lg">
					Master Node
				</label>
				<select
					ref={master}
					id="master"
					onChange={checkDetails}
					className={`bg-[#F9F9F9] w-full pl-3 border-2 ${showAlert ? 'ring-2 ring-red-600' : ''} transition-all focus:ring-2 outline-none border-slate-200 rounded-lg h-10 ${detailsSubmitted ? 'text-gray-400' : ''}`}
					disabled={detailsSubmitted}
				>
					<option value="false">false</option>
					<option value="true">true</option>
				</select>
				<label htmlFor="os" className="font-inter text-lg">
					OS
				</label>
				<select
					ref={os}
					id="os"
					onChange={checkDetails}
					className={`bg-[#F9F9F9] w-full pl-3 border-2 ${showAlert ? 'ring-2 ring-red-600' : ''} transition-all focus:ring-2 outline-none border-slate-200 rounded-lg h-10 ${!osEnabled || detailsSubmitted ? 'text-gray-400' : ''}`}
					disabled={!osEnabled || detailsSubmitted}
				>
					<option value="Linux">Linux</option>
					<option value="Windows">Windows</option>
					<option value="Other">Other</option>
				</select>
				<button
					onClick={
						!detailsValid
							? () => setShowAlert(true)
							: () => submitDetails()
					}
					className="font-inter bg-[#F95B6A] text-lg h-10 focus:ring-2 outline-none text-white w-full rounded-lg"
				>
					Add Agent
				</button> */}
			</div>
		</Modal>
	);
};

export default CampaignModal;
