import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

axios.defaults.baseURL = 'http://localhost:8080/api/users'

export const useUserStore = defineStore('user', () => {

    const userList = ref([])
    const user = ref({})
    const loginRequestForm = ref({})
    const passwordFinderForm = ref({})
    const passwordHint = ref('')
    const fortune = ref({})

    const getUserList = function () {
        axios.get('/admin')
            .then((response) => {
                userList.value = response.data
            })
            .catch((error) => {
            console.log(error)
        })
    }

    const getUser = function () {
        axios.get('')
            .then((response) => {
                user.value = response.data
            })
            .catch((error) => {
            console.log(error)
        })
    }

    const signup = function (user) {
        axios.post('/signup', user)
            .then(() => {
                router.push({ name: 'userLogin'})
            })
            .catch((error) => {
            console.log(error)
        })
    }

    const login = function (loginRequestForm) {
        axios.post('/login', loginRequestForm)
            .then((response) => {
                sessionStorage.setItem('access-token', response.data['access-token'])
                router.push({ name: 'home'})
            })
            .catch((error) => {
                console.log(error)
                router.push({ name: 'userLogin' })
        })
    }

    const modifyUser = function (user) {
        axios.put('/info', user)
            .then(() => {
            router.push({ name: 'userDetail'})
            })
            .catch((error) => {
            console.log(error)
        })
    }

    const getPasswordHint = function (passwordFinderForm) {
        axios.post('/password', passwordFinderForm)
            .then((response) => {
            passwordHint.value = response.data
            })
            .catch((error) => {
            console.log(error)
        })
    }

    const getFortune = function () {
        axios.get('/fortune')
            .then((response) => {
            fortune.value = response.data
            })
            .catch((error) => {
            console.log(error)
        })
    }

    return {
        userList, user, loginRequestForm, passwordFinderForm, passwordHint, fortune, 
        getUserList, getUser, signup, login, modifyUser, getPasswordHint, getFortune
    }
})