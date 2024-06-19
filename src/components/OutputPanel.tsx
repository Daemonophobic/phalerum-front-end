// import { useEffect } from "react";
import { useEffect, useState } from "react";
import JobDto from "../data/DataTransferObjects/JobDto";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
  } from "@material-tailwind/react";
import CodeBlock from "./Shared/CodeBlock";
import OutputDto from "../data/DataTransferObjects/OutputDto";
import ApiClient from "../helpers/ApiClient";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const OutputPanel = (props: {job: Partial<JobDto>}) => {
	const jobId = useParams().id;
	const apiClient = new ApiClient();

  	const [open, setOpen] = useState(1);
	const [outputs, setOutputs] = useState<Partial<OutputDto>[]>([]);
	const [_, setOutputAmount] = useState(0);

	// keep track of accordions
	const [pageAmount, setPageAmount] = useState(1);
	const [page, setPage] = useState(1);
	const [canNextPage, setCanNextPage] = useState(false);
	const [canPrevPage, setCanPrevPage] = useState(false);

	const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

	useEffect(() => {		
		if (jobId === undefined) window.location.href = '/jobs';

		apiClient.getOutputAmount(jobId as string)
			.then((res: number) => {
				setOutputAmount(res);
				if (pageAmount !== Math.ceil(res / 7)) setPageAmount(Math.ceil(res / 7));
			})
			.catch((_: Error) => {
				window.location.href = '/jobs'
			})

		apiClient.getOutputs(jobId as string, page - 1)
			.then((res: OutputDto[]) => {
				setOutputs(res);
			})
			.catch((_: Error) => {
				window.location.href = '/jobs'
			})
		}, []);

	// useEffect(() => {
	// 	const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
	// 		apiClient.getOutputAmount(jobId as string)
	// 		.then((res: number) => {
	// 			setOutputAmount(res);
	// 			if (pageAmount !== Math.ceil(res / 7)) setPageAmount(Math.ceil(res / 7));
	// 		})
	// 		.catch((_: Error) => {
	// 			window.location.href = '/jobs'
	// 		})

	// 		apiClient.getOutputs(jobId as string, page - 1)
	// 		.then((res: OutputDto[]) => {
	// 			res !== outputs ? setOutputs(res) : '';
	// 		})
	// 		.catch((_: Error) => {
	// 			window.location.href = '/jobs'
	// 		});
	// 	}, 10000); // 10 seconds

	// 	return () => clearInterval(intervalId); //clear interval on unmount
	// }, []);

	useEffect(() => {
		setCanNextPage(page < pageAmount);
		setCanPrevPage(page > 1);
	}, [page, pageAmount])

	useEffect(() => {
		apiClient.getOutputAmount(jobId as string)
		.then((res: number) => {
			setOutputAmount(res);
			setPageAmount(Math.ceil(res / 7));
		})
		.catch((_: Error) => {
			window.location.href = '/jobs'
		})

		apiClient.getOutputs(jobId as string, page - 1)
		.then((res: OutputDto[]) => {
			setOutputs(res);
		})
		.catch((_: Error) => {
			window.location.href = '/jobs'
		});
	}, [page])

	console.log(outputs);

	return (
		<div className="w-full h-full flex flex-col justify-center p-5">
			<div className="bg-white rounded-lg h-full w-full p-3 pl-5">
				<h1 className="font-inter text-xl font-semibold pb-1">{props.job.jobName}</h1>
				<p className="font-inter text-gray-600">
					{props.job.jobDescription}
				</p>
					<div className="overflow-y-auto">
					{
						outputs.map((output, index) => (
							<Accordion open={open === index + 1}>
								<AccordionHeader onClick={() => handleOpen(index+1)}>
									{output.createdAt ? new Date(output.createdAt).toLocaleString() : 'Unknown Date'} - {output.agentId.agentName}
								</AccordionHeader>
								<AccordionBody>
									<CodeBlock code={`$ ${props.job.command}\n${atob(output.output ?? '')}`} language="bash" />
								</AccordionBody>
							</Accordion>
						))
					}
					</div>
					<div
				style={{ width: '100%' }}
				className="flex justify-between items-center pl-2 pr-2 pt-2"
			>
				<p className="pl-2 text-sm text-gray-700 font-medium">
					Page {page} of{' '}
					{pageAmount}
				</p>
				<div>
					<FontAwesomeIcon
						onClick={
							canPrevPage
								? () => setPage(page - 1)
								: () => ''
						}
						className={`p-2 text-gray-700 border rounded-lg rounded-r-none pl-3 pr-3 ${canPrevPage ? 'bg-white cursor-pointer' : 'bg-gray-50'} hover:bg-gray-50`}
						icon={faChevronLeft}
					/>
					<FontAwesomeIcon
						onClick={
							canNextPage
								? () => setPage(page + 1)
								: () => ''
						}
						className={`p-2 text-gray-700 border rounded-lg rounded-l-none pl-3 pr-3 ${canNextPage ? 'bg-white cursor-pointer' : 'bg-gray-50'} hover:bg-gray-50`}
						icon={faChevronRight}
					/>
				</div>
			</div>
			</div>
		</div>
	);
};

export default OutputPanel;
