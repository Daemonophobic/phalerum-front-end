import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Validator from '../helpers/Validator';
import LoadingPage from './LoadingPage';
import CampaignPanel from '../components/CampaignPanel';

const CampaignsPage = () => {
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
                    <Sidebar active="Campaigns" />
                    <div className="h-full w-full flex justify-center bg-defaultBackground dark:bg-[#111217] z-0">
                        <CampaignPanel />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CampaignsPage;