import CampaignDto from '../data/DataTransferObjects/CampaignDto';
import JobDto from '../data/DataTransferObjects/JobDto';
import ApiClient from './ApiClient';

export default class Validator {
	private apiClient = new ApiClient();

	public validateEmail = (email: string) =>
		/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

	public validateOTP = (OTP: string) => /^[0-9]{6}$/.test(OTP);

	public validateAuthenticated = async () => {
		const result = await this.apiClient.authCheck();
		if ('authenticated' in result) {
			return result.authenticated;
		}

		throw new Error('User not authenticated');
	};

	public validateCampaign = async (
		campaignId: string
	): Promise<CampaignDto> => {
		return new Promise((resolve, reject) => {
			if (campaignId === '') {
				reject(new Error('Missing the required parameters'));
			}
			this.apiClient
				.getCampaign(campaignId)
				.then((res) => {
					resolve(res);
				})
				.catch((err: Error) => {
					reject(err);
				});
		});
	};

	public validateJob = async (
		jobId: string
	): Promise<JobDto> => {
		return new Promise((resolve, reject) => {
			if (jobId === '') {
				reject(new Error('Missing the required parameters'));
			}
			this.apiClient
				.getJob(jobId)
				.then((res) => {
					resolve(res);
				})
				.catch((err: Error) => {
					reject(err);
				});
		});
	};
}
