import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Validator from '../helpers/Validator';
import LoadingPage from './LoadingPage';
import CampaignModal from '../components/CampaignModal';

const CampaignsPage = () => {
    const validator = new Validator();

    const [showLoader, setShowLoader] = useState<boolean>(true);

    useEffect(() => {
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
                    <Sidebar active="Campaigns" />
                    <div className="h-full w-full flex justify-center bg-defaultBackground z-0">
                        <CampaignModal />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CampaignsPage;