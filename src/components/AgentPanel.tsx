import AgentTable from "./AgentTable";

const AgentPanel = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center p-5">
            <div className="bg-white dark:bg-darkBackground rounded-lg h-full w-full p-3 pl-5">
                <h1 className="font-inter text-xl dark:text-white font-semibold pb-1">Agents</h1>
                <p className="font-inter text-gray-600 dark:text-gray-300">Search and filter all agents.</p>
                <AgentTable />
            </div>
        </div>
    );
}

export default AgentPanel;