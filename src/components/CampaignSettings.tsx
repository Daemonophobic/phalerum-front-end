import IPPicker from "./IPPicker";

const CampaignSettings = () => {
    return (
		<div className="w-full h-full flex flex-col justify-center p-5">
			<div className="bg-white rounded-lg h-full w-full p-3 pl-5">
				<h1 className="font-inter text-xl font-semibold pb-1">
					Campaign Settings
				</h1>
				<p className="font-inter text-gray-600 pb-2">
					Configure the current campaign.
				</p>
                <hr />
                <h2 className="font-inter text-lg font-semibold pb-1 pt-2">
					Scope Configuration
				</h2>
                <p className="font-inter text-gray-600 pb-2 text-sm">
					Configure the scope of the campaign.
				</p>
                <IPPicker />
			</div>
		</div>
    );
}

export default CampaignSettings;