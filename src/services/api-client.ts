import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}


const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params : {
        key: '6408f8b2716e40a9b5e444c6c9cd8cf7'
    },
});


class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
    }
}

export default APIClient;