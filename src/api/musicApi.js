import axios from 'axios'

export default axios.create({
    //Development
    baseURL: 'http://localhost:4000/',

    //Railway 1 firefox - malokesh
    // baseURL: 'https://web-production-c644.up.railway.app/',

    //Railway 2 Chrome - webdev
    // baseURL: 'https://web-production-c644.up.railway.app/',
})