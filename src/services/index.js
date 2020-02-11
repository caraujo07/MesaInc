import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

const http = axios.create({
    baseURL: `https://reqres.in/api/`
})

export { http }

