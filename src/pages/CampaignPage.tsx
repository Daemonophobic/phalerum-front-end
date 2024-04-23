import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Validator from '../helpers/Validator';
import LoadingPage from './LoadingPage';
import { useParams } from 'react-router-dom';
import CampaignDto from '../data/DataTransferObjects/CampaignDto';

const CampaignPage = () => {
    const validator = new Validator();

    const campaignId = useParams().id;

    const [campaign, setCampaign] = useState<Partial<CampaignDto>>({});
    const [showLoader, setShowLoader] = useState<boolean>(true);

    useEffect(() => {
        validator.validateAuthenticated()
        .then((result) => {
            result ? setShowLoader(false) : window.location.href = "/auth/login";
        })
        .catch((_: Error) => {
            window.location.href = "/auth/login";
        })

        if (campaignId === undefined) window.location.href = "/campaigns";

        validator.validateCampaign(campaignId ?? '')
        .then((result) => {
            if ('error' in result) window.location.href = "/campaigns";
            setCampaign(result);
        })
        .catch((_: Error) => {
            window.location.href = "/campaigns";
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
                        <iframe src={`https://grafana.stickybits.red/public-dashboards/${campaign.grafanaId}?orgId=1&theme=light`} className='w-full h-full'></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CampaignPage;