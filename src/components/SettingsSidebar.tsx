import {
	faDroplet,
	faUser,
	faUsers,
	faUsersGear,
} from '@fortawesome/free-solid-svg-icons';
import SettingsButton from './SettingsButton';
import { PathMatch } from 'react-router-dom';

const SettingsSidebar = (props: {isProfile: PathMatch<string> | null, isPreferences: PathMatch<string> | null, isUsers: PathMatch<string> | null, isRoles: PathMatch<string> | null}) => {
	return (
		<div className="flex flex-col h-full w-80 shadow-md z-10">
			<h3 className='font-inter text-sm font-semibold p-3 pb-0'>User Settings</h3>
			<div className="p-3 pt-1 pl-1 pr-1 flex flex-col space-y-1">
				<SettingsButton icon={faUser} to="/settings/profile" active={props.isProfile !== null ? true : false} name="Profile" />
				<SettingsButton icon={faDroplet} to="/settings/preferences" active={props.isPreferences !== null ? true : false} name="Preferences" />
			</div>
			<h3 className='font-inter text-sm font-semibold p-3 pt-0 pb-0'>Admin Settings</h3>
			<div className="p-3 pt-1 pl-1 pr-1 flex flex-col space-y-1">
				<SettingsButton icon={faUsers} to="/admin/users" active={props.isUsers !== null ? true : false} name="Users" />
				<SettingsButton icon={faUsersGear} to="/admin/roles" active={props.isRoles !== null ? true : false} name="Roles" />
			</div>
		</div>
	);
};

export default SettingsSidebar;
