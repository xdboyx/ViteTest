import axios from "axios"
import { toastMsgError } from "./ToastMsg"


const service = axios.create({
    // @ts-ignore
    baseURL: import.meta.env.VITE_BASE_API,
    // timeout: 12000,
})


service.interceptors.request.use(
    (config) => {
        if (localStorage.getItem('JWT'))
            config.headers['Authorization'] = `Bearer ${localStorage.getItem('JWT')}`

        return config
    },
    (error) => {
        console.error(error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(

    (response) => {
        if (response.status === 200 || response.status === 204)
            return response.data
        else
            toastMsgError(response.statusText)

    },
    (error) => {
        // console.error(error)
        console.dir(error)

        var errorMsg = error.response.data ? error.response.data?.message : error.message
        if (errorMsg == undefined)
            errorMsg = error.response.data?.Message

        if (error.request.status === 401 || error.request.status === 500)
            errorMsg = error.request.statusText

        if (error.request.status === 400) {
            // errorMsg = error.response.data
            errorMsg = error.response.data.title
        }

        if (error.request.status === 401)
            // @ts-ignore
            return window.location = `/`

        console.dir(errorMsg)
        toastMsgError(errorMsg)

        return Promise.reject(error)

    }
)

export default service