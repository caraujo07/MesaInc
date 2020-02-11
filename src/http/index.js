import Vue from 'vue'
import axios from 'axios'
import services from './services'

Vue.use(axios)

const http = Vue.http

http.option.root = 'https://reqres.in/api/'

Object.keys(services).map(service => {
    services[service] = Vue.resource('', {}, services[service])
})

export { http }
export default services

