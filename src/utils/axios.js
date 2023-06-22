import axios from "axios";
const API_KEY = 1

const instance = axios.create({
    baseURL: ` https://www.themealdb.com/api/json/v1/${API_KEY}/`
})

export default instance;