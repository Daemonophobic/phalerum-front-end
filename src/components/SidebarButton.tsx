import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SidebarButton = (props: {to: string, icon: IconDefinition, active: boolean, name: string}) => {
    return (
        <Link to={props.to}>
            <div className={`flex items-center w-full text-xl cursor-pointer p-2 rounded-lg hover:bg-currentPage ${props.active ? 'bg-currentPage' : ''}`}>
                    <FontAwesomeIcon icon={props.icon} />
                    <h1 className={`pl-2 font-inter select-none ${props.active ? 'font-semibold' : ''}`}>{props.name}</h1>
            </div>
        </Link>
    );
} 

export default SidebarButton;