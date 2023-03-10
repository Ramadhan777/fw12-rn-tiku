import axios from 'axios'

const http = (token) => {
    const headers = {}
    if(token){
        headers.authorization = 'Bearer ' + token
    }
    const instance = axios.create({
        baseURL: 'https://fw12-backend-eta.vercel.app',
        headers
    })
    return instance
}

export default http