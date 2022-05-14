import axios from "axios";


const baseURL = 'https://neko-cafe-back.herokuapp.com/auth/test/'

export type ResponseType = {
    errorText: string
    info: string
    yourBody: { success: boolean }
    yourQuery: {}
}


export const RequestAPI = {
    postRequest(body: { success: boolean }) {
        return axios.post<ResponseType>(baseURL, body)
            .then(res => res.data.info)
            .catch(error => error.response ? error.response.data.errorText : error.message)
        // console.log({...error});
        // console.log(error.response ? error.response.data.errorText : error.message)

    }
};