// import { useEffect } from "react";
import JobDto from "../data/DataTransferObjects/JobDto";

const OutputPanel = (props: {job: Partial<JobDto>}) => {
	return (
		<div className="w-full h-full flex flex-col justify-center p-5">
			<div className="bg-white rounded-lg h-full w-full p-3 pl-5">
				<h1 className="font-inter text-xl font-semibold pb-1">{props.job.jobName}</h1>
				<p className="font-inter text-gray-600">
					{props.job.jobDescription}
				</p>
			</div>
		</div>
	);
};

export default OutputPanel;
