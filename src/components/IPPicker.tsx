import { useEffect, useRef, useState } from "react";
import ApiClient from "../helpers/ApiClient";

const IPPicker = () => {
    const apiClient = new ApiClient();

    const [valid, setValid] = useState(false); 

	const CIDRInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        apiClient.getSubnets().then((subnets: {value: string[]}) => {
            if (CIDRInput.current === null) {
                return;
            }
            CIDRInput.current.value = subnets.value.join(', ');
            setValid(true);
        });
    }, [])

    const CIDRValidator = (CIDRRanges: any) => {
        if (CIDRRanges === '') {
            setValid(true);
            return;
        }
        const CIDRRegex = /^((((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}\/\d{1,2}(,|, )){1,})?(((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}\/\d{1,2})$/;
        CIDRRegex.test(CIDRRanges) ? setValid(true) : setValid(false);
    }

    const saveCIDR = () => {
        if (CIDRInput.current === null) {
            return;
        }

        if (CIDRInput.current.value === '') {
            apiClient.setSubnets([]);
            return;
        }

        const CIDRRanges = CIDRInput.current.value.split(',').map((range) => range.trim());
        apiClient.setSubnets(CIDRRanges);
    }

    return (
        <>
            <h2 className="font-inter text-lg font-semibold pb-1 pt-2">
                IP Configuration
            </h2>
            <p className="font-inter text-gray-600 pb-2 text-sm">
                Configure the IP ranges of the campaign in a comma seperated list.
            </p>
            <div className="flex flex-col space-y-2">
                <div className="flex flex-row space-x-2">
                    <input
                        ref={CIDRInput}
                        type="text"
                        placeholder="Subnet CIDR range (e.g. 1.1.1.1/32, 10.0.1.0/24)"
                        className={`p-2 w-1/2 focus:outline-none rounded-lg border-2 ${valid ? 'border-green-400' : 'border-red-500'}`}
                        onChange={(e) => CIDRValidator(e.target.value)}
                    />
                </div>
                <button
				className={`font-inter bg-[#F95B6A] text-xl h-12 focus:ring-2 outline-none text-white w-1/2 rounded-lg`}
                disabled={!valid}
                onClick={saveCIDR}
			    >
                    Save
			    </button>
            </div>
        </>
    );
}

export default IPPicker;