import AvatarCell from '../../components/AvatarCell';
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
		cell: (props: any) =>
			props.getValue() ? (
				<StatusPill status={String(props.getValue())} />
			) : (
				''
			),
	},
	{
		accessorKey: 'createdAt',
		header: 'Last Check In',
		size: 200,
		cell: (props: any) => (
			<p>{new Date(props.getValue()).toLocaleString()}</p>
		),
	},
];

export default columns;
