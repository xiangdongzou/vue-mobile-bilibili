import axios from 'axios'
// import router from './src/router/index.js'

const http = axios.create({
    baseURL: 'http://localhost:3000/mock/18'
})

axios.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
}, function (error) {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    return response
    // }, function (error) {
    //     if (error.response.status === 401 || error.response.status === 402) {
    //         router.push('/login')
    //         Vue.prototype.$msg.fail(error.response.data.message)
    //     }
    //     return Promise.reject(error)
})

export default http
