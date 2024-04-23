import {classNames} from './Shared/Utils'

const StatusPill = (props: { status: string }) => {
    const status = props.status ? props.status.toLowerCase() : "unknown";
  
    return (
      <span
        className={
          classNames(
            "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
            status.startsWith("active") ? "bg-green-100 text-green-800" : null,
            status.startsWith("true") ? "bg-green-100 text-green-800" : null,
            status.startsWith("inactive") ? "bg-yellow-100 text-yellow-800" : null,
            status.startsWith("offline") ? "bg-red-100 text-red-800" : null,
          )
        }
      >
        {status}
      </span>
    );
};

export default StatusPill;