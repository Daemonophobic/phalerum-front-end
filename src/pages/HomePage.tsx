import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Validator from '../helpers/Validator';
import LoadingPage from './LoadingPage';

const HomePage = () => {
    const [showLoader, setShowLoader] = useState<boolean>(true);

    useEffect(() => {
        const validator = new Validator();
        validator.validateAuthenticated()
        .then((result) => {
            result ? setShowLoader(false) : window.location.href = "/auth/login";
        })
        .catch((_: Error) => {
            window.location.href = "/auth/login";
        })
    }, [])

    return (
        <>
            <LoadingPage showLoader={showLoader} />
            <div className='flex flex-col h-screen w-screen'>
                <Header />
                <div className='flex w-full h-full'>
                    <Sidebar active="Home" />
                    <div className="h-full w-full flex justify-center bg-defaultBackground z-0">
                        <iframe src="https://grafana.stickybits.red/public-dashboards/59b587a6ad6a45e8804b7c983afc739a?orgId=1&theme=light" className='w-full h-full'></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;