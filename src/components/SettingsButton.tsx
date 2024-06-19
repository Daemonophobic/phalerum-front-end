import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const SettingsButton = (props: {
	to: string;
	icon: IconDefinition;
	active: boolean;
	name: string;
}) => {
	return (
		<Link to={props.to}>
			<div
				className={`flex items-center w-full text-md cursor-pointer p-2 pl-1 rounded-md hover:bg-currentPage ${props.active ? 'bg-currentPage border-l-4 border-blue-400 ' : 'border-l-4'}`}
			>
				<FontAwesomeIcon icon={props.icon} />
				<h1
					className="pl-1 font-inter select-none"
				>
					{props.name}
				</h1>
			</div>
		</Link>
	);
};

export default SettingsButton;
