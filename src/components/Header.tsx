import logo from '../assets/logo-small.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, } from '@fortawesome/free-regular-svg-icons';
import { faRightFromBracket, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserDto from '../data/DataTransferObjects/UserDto';
import ApiClient from '../helpers/ApiClient';

const Header = () => {
    const [user, setUser] = useState<Partial<UserDto>>({});
    const [profileClicked, setProfileClicked] = useState(false);
    const [sideMenuClicked, setSideMenuClicked] = useState(false);

    const toggleCaret = () => profileClicked ? setProfileClicked(false) : setProfileClicked(true);

    const toggleSideMenu = () => sideMenuClicked ? setSideMenuClicked(false) : setSideMenuClicked(true);

    useEffect(() => {
        const apiClient = new ApiClient();
        apiClient.getOwnUserInfo().then((res) => {
            setUser(res);
        }).catch((err) => {
            console.log(err);
            window.location.href = "/auth/login";
        });
    }, [])

    return (
        <nav className="flex h-16 pl-8 pr-8 bg-white w-screen items-center justify-between shadow-md z-10">
            <div className='flex items-center'>                    
                <div onClick={() => toggleSideMenu()} className={`relative transition-all ease-in flex flex-col hover:bg-gray-100 rounded-lg h-10 w-10 justify-evenly items-center mr-3 cursor-pointer`}>
                    <span className={`absolute top-1/4 w-8 rounded-lg border-2 border-black`} />
                    <span className={`absolute top-1/2 w-8 rounded-lg border-2 border-black`} />
                    <span className={`absolute top-3/4 w-8 rounded-lg border-2 border-black`} />
                </div>
                <Link to="/">
                    <img className='h-16' src={logo} />
                </Link> 
            </div>
            <div className='flex items-center'>
                <div onClick={() => toggleCaret()} className='flex font-inter items-center space-x-2 mr-5 rounded-lg p-2 hover:bg-gray-100 transition-colors ease-in cursor-pointer'>
                    <FontAwesomeIcon className='h-6' icon={faUser} />
                    <h1 className='font-semibold select-none '>{user.firstName} {user.lastName}</h1>
                    <FontAwesomeIcon className={`h-6 transition-all ${profileClicked ? 'rotate-180' : ''}`} icon={faCaretDown} />
                </div>
                <Link className='mt-1' to="/auth/logout">
                    <FontAwesomeIcon className='h-6 hover:bg-gray-100 p-2 rounded-lg transition-colors ease-in' icon={faRightFromBracket} />
                </Link>
            </div>
        </nav>
    );
}

export default Header;