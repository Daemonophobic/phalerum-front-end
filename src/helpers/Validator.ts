import ApiClient from "./ApiClient";

export default class Validator {
    private apiClient = new ApiClient();

    public validateEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    public validateOTP = (OTP: string) => /^[0-9]{6}$/.test(OTP)

    public validateAuthenticated = async () => {
        const result = await this.apiClient.authCheck();
        if ('authenticated' in result) {
            return result.authenticated;
        }

        throw new Error("User not authenticated");
    }
}