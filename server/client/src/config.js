import axios from 'axios'
export const axiosIstance = axios.create({
 baseURL = "https://bandsangdev.herokuapp.com/api"
})