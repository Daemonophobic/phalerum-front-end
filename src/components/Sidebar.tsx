import { faHome, faFlag, faLaptop, faTerminal } from "@fortawesome/free-solid-svg-icons";
import SidebarButton from "./SidebarButton";

const Sidebar = (props: {active: string}) => {
    return (
        <div className="flex flex-col h-full w-80 shadow-md z-10 justify-between">
            <div className="p-3 flex flex-col space-y-3">
                <SidebarButton to="/" icon={faHome} active={props.active === "Home" ? true : false} name="Home" />
                <SidebarButton to="/campaigns" icon={faFlag} active={props.active === "Campaigns" ? true : false} name="Campaigns" />
                <SidebarButton to="/agents" icon={faLaptop} active={props.active === "Agents" ? true : false} name="Agents" />
                <SidebarButton to="/jobs" icon={faTerminal} active={props.active === "Jobs" ? true : false} name="Jobs" />
            </div>
            <div className="flex-col space-y-3 p-3 hidden md:block">
                <div className='flex flex-col p-2 h-26 font-inter rounded-lg justify-between border-[#AFAFAF] border-2'>
                    <h1 className='font-semibold'>Current Campaign - #3</h1>
                    <div>
                        <p>Fontys ICT #Netlab</p>
                        <p className='text-gray-400'>Since: 25th of March 2024</p>
                    </div>
                </div>
                <div className='flex flex-col p-2 h-26 font-inter rounded-lg justify-between border-[#AFAFAF] border-2'>
                    <h1 className='font-semibold'>Campaign Statistics</h1>
                    <div>
                        <p>Agents: 36</p>
                        <p>Jobs: 14</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;