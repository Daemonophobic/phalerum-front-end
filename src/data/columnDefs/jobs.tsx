import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarCell from "../../components/AvatarCell";
import StatusPill from "../../components/StatusPill";
import { faLinux, faWindows } from "@fortawesome/free-brands-svg-icons";

const columns = [
    {
        accessorKey: 'jobName',
        header: 'Name',
        cell: (props: any) => <p className="w-32 truncate">{props.getValue()}</p>,
    },
    {
        accessorKey: 'jobDescription',
        header: 'Description',
        cell: (props: any) => <p className="w-64 truncate">{props.getValue()}</p>
    },
    {
        accessorKey: 'completed',
        header: 'Completed',
        cell: (props: any) => props.getValue() ? <StatusPill status={String(props.getValue())} /> : ''
    },
    {
        accessorKey: 'disabled',
        header: 'Enabled',
        cell: (props: any) => <StatusPill status={String(!props.getValue())} />,
        sortingFns: 'alphanumeric'
    },
    {
        accessorKey: 'os',
        header: 'OS',
        cell: (props: {row: any}) => getOsIcon(props.row.original.crossCompatible, props.row.original.os) 
    },
    {
        accessorKey: 'createdBy',
        header: 'Created By',
        size: 400,
        cell: (props: any) => <AvatarCell user={props.getValue()} />
    }
]

const getOsIcon = (crossCompatible: boolean, os: string) => {
    if (crossCompatible) {
        return <><FontAwesomeIcon className="text-blue-600" icon={faWindows} /> <FontAwesomeIcon icon={faLinux} /></>
    }
    switch(os) {
        case "Windows":
            return <FontAwesomeIcon className="text-blue-600" icon={faWindows} />;
        case "Linux":
            return <FontAwesomeIcon icon={faLinux} />;
        default:
            return <p>{os}</p>;
    }
}

export default columns;