const columns = [
    {
        accessorKey: 'agentName',
        header: 'Agent Name',
        cell: (props: any) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'addedByUser',
        header: 'Added By',
        size: 200,
        cell: (props: any) => props.getValue() ? <p>{props.getValue().firstName} {props.getValue().lastName}</p> : <p>Agent</p>,
        filterFn: (row: any, _: any, filterValue: any) => {
            if (row.original.addedByUser) {
                return row.original.addedByUser.firstName.toLowerCase().includes(filterValue.toLowerCase()) || row.original.addedByUser.lastName.toLowerCase().includes(filterValue.toLowerCase());
            } else {
                return row.original.addedByAgent.agentName.toLowerCase().includes(filterValue.toLowerCase());
            }
        }
    },
    {
        accessorKey: 'master',
        header: 'Master Node',
        cell: (props: any) => <p className={`${props.getValue() ? 'bg-green-500' : ''} rounded-lg w-min text-white p-1`}>{String(props.getValue() ? true : '')}</p>
    },
    {
        accessorKey: 'os',
        header: 'OS',
        cell: (props: any) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'ipAddress',
        header: 'IP Address',
        cell: (props: any) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'createdAt',
        header: 'Last Check In',
        size: 200,
        cell: (props: any) => <p>{new Date(props.getValue()).toLocaleString()}</p>
    }
]

export default columns;