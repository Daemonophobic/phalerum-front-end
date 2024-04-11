const LoginForm = () => {
    return (
        <div className="flex flex-col sm:w-5/12 w-8/12 space-y-3">
            <h1 className="font-inter font-bold text-3xl text-center md:text-left">Sign in to A-ware BSF</h1>
            <label htmlFor="email" className="font-inter text-xl">Email</label>
            <input type="email" id="email" className="bg-[#F9F9F9] w-full pl-2 border-2 focus:ring-2 outline-none border-slate-200 rounded-lg h-10" />
            <label htmlFor="password" className="font-inter text-xl">Password</label>
            <input type="password" id="password" className="bg-[#F9F9F9] w-full pl-2 border-2 focus:ring-2 outline-none border-slate-200 rounded-lg h-10" />
            <div className="flex items-center space-x-3">
                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="checkbox">
                    <input type="checkbox"
                        className="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none outline-none focus:ring-2 rounded-md border-2 border-slate-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-[#F95B6A] checked:before:bg-gray-900 hover:before:opacity-10"
                        id="checkbox" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                </label>
                <label htmlFor="checkbox" className="font-inter text-xl">Keep me signed in</label>
            </div>
            <button className="font-inter bg-[#F95B6A] text-xl h-12 focus:ring-2 outline-none text-white w-full rounded-lg">Sign in</button>
        </div>
    );
}

export default LoginForm;