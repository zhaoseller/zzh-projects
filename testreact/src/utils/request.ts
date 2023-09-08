import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class Request {
    private instance: AxiosInstance | undefined

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.instance.interceptors.request.use(
            (config) => {
                return {
                    baseURL: '/',
                    timeout: 20000,
                    crossDomain: true,
                    ...config
                }
            }
        )
    }
    request(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return new Promise<AxiosResponse>((resolve, reject) => {
            this.instance?.request(config)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}

export default new Request({})
