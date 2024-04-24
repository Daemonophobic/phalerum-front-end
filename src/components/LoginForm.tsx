import { useEffect, useRef, useState } from "react";
import ApiClient from "../helpers/ApiClient";
import Validator from '../helpers/Validator';

const LoginForm = () => {
    const apiClient = new ApiClient();
    const validator = new Validator();

    const [detailsSubmitted, setDetailsSubmitted] = useState(false);
    const [detailsValid, setDetailsValid] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showError, setShowError] = useState(false);
    const [message, setMessage] = useState<string>("Something went wrong, please contact an administrator");

    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const keepSession = useRef<HTMLInputElement>(null);
    const OTP = useRef<HTMLInputElement>(null);

    const checkDetails = () => {
        if (email.current === null || password.current === null) {
            setDetailsValid(false);
            return;
        }
    
        if (email.current.value === '' || password.current.value === '') {
            setDetailsValid(false);
            return;
        }
    
        validator.validateEmail(email.current.value) ? setDetailsValid(true) : setDetailsValid(false);
    }

    const checkOTP = () => {
        if (OTP.current === null) {
            setDetailsValid(false);
            return;
        }

        if (OTP.current.value === '') {
            setDetailsValid(false)
            return;
        }

        if (validator.validateOTP(OTP.current.value)) {
            setDetailsValid(true);
        } else {
            setDetailsValid(false)
            return;
        }
    }

    const submitDetails = async () => {
        if (email.current === null || password.current === null ||
            keepSession.current === null || OTP.current === null) {
            setShowError(true);
            return;
        }

        if (email.current.value === '' || password.current.value === '' || OTP.current.value === '') {
            setShowError(true);
            return
        }

        const result = await apiClient.authenticateUser({emailAddress: email.current.value, password: password.current.value}, OTP.current.value, keepSession.current.checked);
        if ('error' in result) {
            setMessage(result.error);
            setShowError(true);
            return;
        }

        window.location.href = "/"
    }

    useEffect(() => {
        if (showAlert === true) {
            setTimeout(() => {
                setShowAlert(false);
            },3500)
        }
    }, [showAlert]);

    useEffect(() => {
        if (showError === true) {
            setTimeout(() => {
                setShowError(false);
            },3500)
        }
    }, [showError]);

    return (
        <div className="flex flex-col sm:w-5/12 w-9/12 space-y-4 dark:text-white">
            <h1 className={`absolute font-inter bg-[#F95B6A] text-white p-2 rounded-lg left-1/2 transition-all opactiy-100 -translate-x-1/2 top-4 ${showAlert ? '' : 'opacity-0'}`}>Please fill in the correct required information</h1>
            <h1 className={`absolute font-inter bg-[#F95B6A] text-white p-2 rounded-lg left-1/2 transition-all opactiy-100 -translate-x-1/2 top-4 ${showError ? '' : 'opacity-0'}`}>{message}</h1>
            <h1 className="font-inter font-bold text-3xl text-center md:text-left">Sign in to A-ware BSF</h1>
            <label htmlFor="email" className="font-inter text-xl">Email</label>
            <input type="email" ref={email} onChange={checkDetails} id="email" className={`bg-[#F9F9F9] dark:text-black w-full pl-3 border-2 focus:ring-2 dark:focus:ring-blue-300 outline-none border-slate-200 rounded-lg h-10 ${detailsSubmitted ? 'text-gray-400' : ''}`} disabled={detailsSubmitted} />
            <label htmlFor="password" className="font-inter text-xl">Password</label>
            <input type="password" ref={password} onChange={checkDetails} id="password" className={`bg-[#F9F9F9] dark:text-black w-full pl-2 border-2 focus:ring-2 dark:focus:ring-blue-300 outline-none border-slate-200 rounded-lg h-10 ${detailsSubmitted ? 'text-gray-400' : ''}`} disabled={detailsSubmitted} />
            <label htmlFor="OTP" className={`${detailsSubmitted ? '' : 'hidden'} font-inter text-xl`}>OTP</label>
            <input type="text" inputMode="numeric" onChange={checkOTP} ref={OTP} id="OTP" className={`${detailsSubmitted ? '' : 'hidden'} bg-[#F9F9F8] w-full pl-3 dark:text-black border-2 focus:ring-2 dark:focus:ring-blue-300 outline-none border-slate-200 rounded-lg h-10`} />
            <div className="flex items-center space-x-3">
                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="checkbox">
                    <input type="checkbox"
                        ref={keepSession} onChange={checkDetails} className="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none outline-none focus:ring-2 dark:focus:ring-blue-300 rounded-md border-2 border-slate-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-[#F95B6A] checked:before:bg-gray-900 hover:before:opacity-10"
                        id="checkbox" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" strokeWidth="1">
                        <path fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"></path>
                      </svg>
                    </span>
                </label>
                <label htmlFor="checkbox" className="font-inter text-xl select-none">Keep me signed in</label>
            </div>
            <button onClick={detailsValid ? () => {
                    setDetailsSubmitted(true)
                    setDetailsValid(false);
                } : () => setShowAlert(true)} className={`${detailsSubmitted ? 'hidden' : ''} font-inter bg-[#F95B6A] text-xl h-12 focus:ring-2 outline-none text-white w-full rounded-lg`}>Sign in</button>
            <button onClick={detailsValid ? () => submitDetails() : () => setShowAlert(true)} className={`${detailsSubmitted ? '' : 'hidden'} font-inter bg-[#F95B6A] text-xl h-12 focus:ring-2 outline-none text-white w-full rounded-lg`}>Sign in</button>
        </div>
    );
}

export default LoginForm;