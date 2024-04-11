import backdrop from '../assets/backdrop.png';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <div className="flex m-0 p-0 bg-[#F9F9F9]">
            <img className='h-screen select-none lg:block hidden' src={backdrop} alt='backdrop' draggable='false' />
            <div className='flex w-full h-screen justify-center items-center'>
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;