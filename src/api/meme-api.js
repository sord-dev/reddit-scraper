import axios from "axios";

export default axios.create({
    baseURL: 'https://meme-api.herokuapp.com'
})