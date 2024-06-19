import { useState } from 'react';
import { classNames } from './Shared/Utils';
import ApiClient from '../helpers/ApiClient';

const StatusPill = (props: { status: string, onClick?: boolean, _id?: string }) => {
	console.log(props)
	const status = props.status ? props.status.toLowerCase() : 'unknown';
	const apiClient = new ApiClient();
	const [disabled, setDisabled] = useState(status === 'true' || status === 'false' ? status === 'true' : status);

	const toggleJob = (_id: string | undefined) => {
		if (_id !== undefined) {
			apiClient.toggleJob(_id);
			setDisabled(!disabled);
		}
	}

	return (
		<span
			className={classNames(
				`${props.onClick ? 'cursor-pointer select-none' : ''} px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm`,
				String(disabled).startsWith('active')
					? 'bg-green-100 text-green-800'
					: null,
				String(disabled).startsWith('true')
					? 'bg-green-100 text-green-800'
					: null,
				String(disabled).startsWith('inactive')
					? 'bg-yellow-100 text-yellow-800'
					: null,
				String(disabled).startsWith('partial')
					? 'bg-yellow-100 text-yellow-800'
					: null,
				String(disabled).startsWith('offline') ? 'bg-red-100 text-red-800' : null,
				String(disabled).startsWith('false') ? 'bg-red-100 text-red-800' : null
			)}
			onClick={props.onClick ? () => toggleJob(props._id) : () => ''}
		>
			{String(disabled)}
		</span>
	);
};

export default StatusPill;
