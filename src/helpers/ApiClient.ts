import axios from 'axios';

import UserDto from '../data/DataTransferObjects/UserDto';
import AgentDto from '../data/DataTransferObjects/AgentDto';

export default class ApiClient {
	private apiUrl;
	private axiosConfig = {
		validateStatus: () => true,
	};

	constructor() {
		this.apiUrl = import.meta.env.VITE_API_BASE_URL;
	}

	public authenticateUser = async (
		userInfo: Partial<UserDto>,
		OTP: string,
		keepSession: boolean = false
	): Promise<{ success: boolean } | { error: string }> => {
		return new Promise((resolve, reject) => {
			if (
				typeof userInfo.emailAddress === 'undefined' ||
				typeof userInfo.password === 'undefined' ||
				typeof OTP === 'undefined'
			) {
				reject({ error: 'Missing the required parameters' });
			}

			axios
				.post(
					`${this.apiUrl}/auth/login`,
					{
						email: userInfo.emailAddress,
						password: userInfo.password,
						OTP,
						keepSession,
					},
					this.axiosConfig
				)
				.then((res) => {
					resolve(res.data);
				})
				.catch((_: Error) => {
					reject({ error: 'Invalid username, password, or OTP' });
				});
		});
	};

	public authCheck = async (): Promise<any> => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.apiUrl}/auth/health`, this.axiosConfig)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err: Error) => {
					console.log(err);
					reject(err);
				});
		});
	};

	public logoutUser = async (): Promise<null> => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.apiUrl}/auth/logout`, this.axiosConfig)
				.then((_) => {
					resolve(null);
				})
				.catch((err: Error) => {
					console.log(err);
					reject(err);
				});
		});
	};

	public getOwnUserInfo = async (): Promise<UserDto> => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.apiUrl}/users/me`, this.axiosConfig)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err: Error) => {
					console.log(err);
					reject(err);
				});
		});
	};

	public getAgents = async (): Promise<AgentDto[]> => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.apiUrl}/agents`, this.axiosConfig)
				.then((res) => {
					resolve(res.data.map((agent: any) => new AgentDto(agent)));
				})
				.catch((err: Error) => {
					console.log(err);
					reject(err);
				});
		});
	};

	public getCampaigns = async (): Promise<any> => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.apiUrl}/campaigns`, this.axiosConfig)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err: Error) => {
					console.log(err);
					reject(err);
				});
		});
	};

	public getCurrentCampaign = async (): Promise<any> => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.apiUrl}/campaigns/current`, this.axiosConfig)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err: Error) => {
					console.log(err);
					reject(err);
				});
		});
	};

	public getCampaign = async (campaignId: string): Promise<any> => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.apiUrl}/campaigns/${campaignId}`, this.axiosConfig)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err: Error) => {
					console.log(err);
					reject(err);
				});
		});
	};

	public getJobs = async (): Promise<any> => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.apiUrl}/jobs`, this.axiosConfig)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err: Error) => {
					console.log(err);
					reject(err);
				});
		});
	};

	public getJob = async (jobId: string): Promise<any> => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.apiUrl}/jobs/${jobId}`, this.axiosConfig)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err: Error) => {
					console.log(err);
					reject(err);
				});
		});
	};


	public addAgent = async (agent: Partial<AgentDto>): Promise<any> => {
		return new Promise((resolve, reject) => {
			if (
				typeof agent.agentName === 'undefined' ||
				typeof agent.master === 'undefined' ||
				typeof agent.os === 'undefined'
			) {
				reject({ error: 'Missing the required parameters' });
			}

			axios
				.post(`${this.apiUrl}/agents`, agent, this.axiosConfig)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err: Error) => {
					console.log(err);
					reject(err);
				});
		});
	};

	public getOutputs = async (jobId: string, page: number): Promise<any> => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.apiUrl}/jobs/output/${jobId}?amount=7&page=${page}`, this.axiosConfig)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err: Error) => {
					console.log(err);
					reject(err);
				});
		});
	}

	public getOutputAmount = async (jobId: string): Promise<any> => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.apiUrl}/jobs/output/${jobId}/amount`, this.axiosConfig)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err: Error) => {
					console.log(err);
					reject(err);
				});
		});
	}

	public getSubnets = async (): Promise<any> => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.apiUrl}/settings/campaign/subnets`, this.axiosConfig)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err: Error) => {
					console.log(err);
					reject(err);
				});
		});
	}

	public setSubnets = async (subnets: string[]): Promise<any> => {
		return new Promise((resolve, reject) => {
			axios
				.put(`${this.apiUrl}/settings/campaign/subnets`, { subnets }, this.axiosConfig)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err: Error) => {
					console.log(err);
					reject(err);
				});
		});
	}

	public toggleJob = async (_id: string): Promise<any> => {
		return new Promise((resolve, reject) => {
			axios
				.put(`${this.apiUrl}/jobs/toggle/${_id}`, {}, this.axiosConfig)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err: Error) => {
					console.log(err);
					reject(err);
				});
		});
	}
}
