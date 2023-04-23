import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params : {
        key: '6408f8b2716e40a9b5e444c6c9cd8cf7'
    },
})