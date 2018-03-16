import axios from 'axios'
export const REQUEST_POST = 'REQUEST_POST'

export const requestPost = () => {
    return({
        type: REQUEST_POST
    })
}

export function fetch() {
    return axios.get('https://www.willpower.in.th/posts')
}