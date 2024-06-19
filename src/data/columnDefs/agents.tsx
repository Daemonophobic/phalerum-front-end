import AvatarCell from '../../components/AvatarCell';
import StatusCircle from '../../components/Shared/StatusCircle';
import StatusPill from '../../components/StatusPill';

const columns = [
	{
		accessorKey: 'agentName',
		header: 'Agent Name',
		cell: (props: any) => <p>{props.getValue()}</p>,
	},
	{
		accessorKey: 'addedByUser',
		header: 'Added By',
		size: 300,
		cell: (props: any) =>
			props.getValue() ? (
				<AvatarCell user={props.getValue()} />
			) : (
				<p>Agent</p>
			),
		filterFn: (row: any, _: any, filterValue: any) => {
			if (row.original.addedByUser) {
				return (
					row.original.addedByUser.firstName
						.toLowerCase()
						.includes(filterValue.toLowerCase()) ||
					row.original.addedByUser.lastName
						.toLowerCase()
						.includes(filterValue.toLowerCase())
				);
			} else {
				return row.original.addedByAgent.agentName
					.toLowerCase()
					.includes(filterValue.toLowerCase());
			}
		},
	},
	{
		accessorKey: 'os',
		header: 'OS',
		cell: (props: any) => <p>{props.getValue()}</p>,
	},
	{
		accessorKey: 'ipAddress',
		header: 'IP Address',
		size: 200,
		cell: (props: any) => <p>{props.getValue()}</p>,
	},
	{
		accessorKey: 'master',
		header: 'Master',
		cell: (props: { row: any }) =>
			props.row.original.master || props.row.original.partialMaster ? (
				<StatusPill status={props.row.original.partialMaster === true ? 'partial' : String(props.row.original.master)} />
			) : (
				''
			),
	},
	{
		accessorKey: 'lastCheckIn',
		header: 'Last Check In',
		size: 200,
		cell: (props: any) => (
			<div>{props.getValue() ? <div className='flex justify-center items-center gap-x-2'>{<StatusCircle lastCheckIn={new Date(props.getValue())} />}{new Date(props.getValue()).toLocaleString()}</div>: 'N/A'}</div>
		),
	},
	{
		accessorKey: 'createdAt',
		header: 'Created At',
		cell: (props: any) =>
			props.getValue() ? (
				<p>{props.getValue() ? new Date(props.getValue()).toLocaleString(): 'N/A'}</p>
			) : (
				''
			),
	},
];

export default columns;
