import Request from "@/utils/request";
// interface commonAskInterface {
//     method: string,
//     url: string,
//     data: any
// }
interface loginInterface {
    userName: string,
    password: string
}
export const getToken = (data: loginInterface) => {
    return Request.instance({
        method: 'post',
        url: '/api/user/login',
        data
    })
}

interface registInterface {
    userName: string,
    password: string
}
export const registApi = (data: registInterface) => {
    return Request.instance({
        method: 'post',
        url: '/api/user/register',
        data
    })
}