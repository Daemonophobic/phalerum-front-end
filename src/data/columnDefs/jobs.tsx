import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AvatarCell from '../../components/AvatarCell';
import StatusPill from '../../components/StatusPill';
import { faLinux, faWindows } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const columns = [
	{
		accessorKey: 'name',
		header: 'Name',
		size: 200,
		cell: (props: { row: any }) =>
			props.row.original.grafanaId !== '' ? (
				<Link
					to={`/jobs/${props.row.original._id}`}
					className="underline italic w-32 truncate"
				>
					{props.row.original.jobName}
				</Link>
			) : (
				<p className='w-32 truncate'>{props.row.original.jobName}</p>
			),
	},
	{
		accessorKey: 'jobDescription',
		header: 'Description',
		cell: (props: any) => (
			<p className="w-64 truncate">{props.getValue()}</p>
		),
	},
	{
		accessorKey: 'completed',
		header: 'Completed',
		cell: (props: any) =>
			props.getValue() ? (
				<StatusPill status={String(props.getValue())} />
			) : (
				''
			),
	},
	{
		accessorKey: 'disabled',
		header: 'Enabled',
		cell: (props: { row: any }) => <StatusPill onClick={true} _id={props.row.original._id} status={String(!props.row.original.disabled)} />,
		sortingFns: 'alphanumeric',
	},
	{
		accessorKey: 'os',
		header: 'OS',
		cell: (props: { row: any }) =>
			getOsIcon(
				props.row.original.crossCompatible,
				props.row.original.os
			),
	},
	{
		accessorKey: 'createdBy',
		header: 'Created By',
		size: 400,
		cell: (props: any) =>
			props.getValue() ? (
				<AvatarCell user={props.getValue()} />
			) : (
				<AvatarCell user={{ emailAddress: 'System' }} />
			),
	},
];

const getOsIcon = (crossCompatible: boolean, os: string) => {
	if (crossCompatible) {
		return (
			<>
				<FontAwesomeIcon className="text-blue-600" icon={faWindows} />{' '}
				<FontAwesomeIcon icon={faLinux} />
			</>
		);
	}
	switch (os) {
		case 'Windows':
			return (
				<FontAwesomeIcon className="text-blue-600" icon={faWindows} />
			);
		case 'Linux':
			return <FontAwesomeIcon icon={faLinux} />;
		default:
			return <p>{os}</p>;
	}
};

export default columns;
