import { Link } from "react-router-dom";
import AvatarCell from "../../components/AvatarCell";
import StatusPill from "../../components/StatusPill";

const columns = [
    {
        accessorKey: 'number',
        header: '#',
        size: 50,
        cell: (props: any) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'name',
        header: 'Name',
        size: 200,
        cell: (props: {row: any}) => props.row.original.grafanaId !== '' ? <Link to={`/campaigns/${props.row.original._id}`} className="underline italic">{props.row.original.name}</Link> : <p>{props.row.original.name}</p>
    },
    {
        accessorKey: 'description',
        header: 'Description',
        size: 300,
        cell: (props: any) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'active',
        header: 'Active',
        cell: (props: any) => props.getValue() ? <StatusPill status={String(props.getValue())} /> : ''
    },
    {
        accessorKey: 'createdBy',
        header: 'Created By',
        cell: (props: any) => props.getValue() ? <AvatarCell user={props.getValue()} /> : <AvatarCell user={{emailAddress: "System"}} />
    },
    {
        accessorKey: 'startDate',
        header: 'Start Date',
        cell: (props: any) => <p>{new Date(props.getValue()).toDateString()}</p>
    },
    {
        accessorKey: 'endDate',
        header: 'End Date',
        cell: (props: any) => <p>{new Date(props.getValue()).toDateString()}</p>
    }
    // {
    //     accessorKey: 'master',
    //     header: 'Master',
    //     cell: (props: any) => <p className={`${props.getValue() ? 'bg-green-500' : ''} rounded-lg w-min text-white p-1 pl-2 pr-2`}>{<FontAwesomeIcon icon={faCheck} />}</p>
    // },
    // {
    //     accessorKey: 'createdAt',
    //     header: 'Last Check In',
    //     size: 200,
    //     cell: (props: any) => <p>{new Date(props.getValue()).toLocaleString()}</p>
    // }
]

export default columns;