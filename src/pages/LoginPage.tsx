import { useEffect, useState } from 'react';
import backdrop from '../assets/backdrop.png';
import LoginForm from '../components/LoginForm';
import Validator from '../helpers/Validator';
import LoadingPage from './LoadingPage';

const LoginPage = () => {
    const [showLoader, setShowLoader] = useState<boolean>(true);

    useEffect(() => {
        const validator = new Validator();
        validator.validateAuthenticated()
        .then((result) => {
            result ? window.location.href = "/" : setShowLoader(false);
        })
        .catch((_: Error) => {
            setShowLoader(false);
        })
    }, [])
    
    return (
        <>
            <LoadingPage showLoader={showLoader} />
            <div className="flex m-0 p-0 bg-defaultBackground dark:bg-darkBackground">
                <img className='h-screen select-none lg:block hidden' src={backdrop} alt='backdrop' draggable='false' />
                <div className='flex w-full h-screen justify-center items-center'>
                    <LoginForm />
                </div>
            </div>
        </>
    );
}

export default LoginPage;