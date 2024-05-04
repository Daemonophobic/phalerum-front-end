import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

const LoadingPage = (props: { showLoader: boolean }) => {
	const [removeLoader, setRemoveLoader] = useState(false);

	useEffect(() => {
		if (!props.showLoader) {
			setTimeout(() => {
				setRemoveLoader(true);
			}, 500);
		}
	}, [props.showLoader]);

	return removeLoader ? (
		''
	) : (
		<div
			className={`absolute z-30 ${props.showLoader ? 'bg-white' : 'bg-transparent opacity-0 pointer-events-none'} transition-all h-screen w-screen flex justify-center items-center`}
		>
			<ReactLoading
				type={'spin'}
				color={'#F95B6A'}
				height={200}
				width={100}
			/>
		</div>
	);
};

export default LoadingPage;
