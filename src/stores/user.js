import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_USER_API = `http://localhost:8080/api/users`

export const useUserStore = defineStore('userStore', () => {

  const userList = ref([])
  const loginUser = ref({})
  const errorMessage = ref('')
  const passwordHint = ref('')
  const fortune = ref({})

  const getUserList = function () {
    axios.get(`${REST_USER_API}/admin`, {
      headers: {
        'access-token': sessionStorage.getItem('access-token')
      }
    })
      .then((response) => {
        userList.value = response.data
      })
      .catch((error) => {
        console.log(error)
        router.push({ name: 'home' })
      })
  }

  const getUser = function () {
    axios.get(REST_USER_API, {
      headers: {
        'access-token': sessionStorage.getItem('access-token')
      }
    })
      .then((response) => {
        loginUser.value = response.data
      })
      .catch((error) => {
        console.log(error)
        router.push({ name: 'home' })
      })
  }

  const signup = function (user) {
    axios.post(`${REST_USER_API}/signup`, user)
      .then(() => {
        errorMessage.value = ''
        router.push({ name: 'userLogin' })
      })
      .catch((error) => {
        console.log(error)
        errorMessage.value = '중복된 아이디 닉네임입니다'
        router.push({ name: 'signup' })
      })
  }

  const modifyUser = function () {
    axios.put(`${REST_USER_API}/info`, loginUser.value, {
      headers: {
        'access-token': sessionStorage.getItem('access-token')
      }
    })
      .then(() => {
        errorMessage.value = ''
        router.push({ name: 'userDetail' })
      })
      .catch((error) => {
        console.log(error)
        errorMessage.value = '중복된 아이디 닉네임입니다'
        router.push({ name: 'userUpdate' })
      })
  }

  const login = function (loginRequestForm) {

    sessionStorage.removeItem('access-token');

    axios.post(`${REST_USER_API}/login`, loginRequestForm)
      .then((response) => {
        if (response.data && response.data['access-token']) {
          errorMessage.value = ''
          alert('WELCOME TO WhatsYouLook !!')
          sessionStorage.setItem('access-token', response.data['access-token']);
          router.push({ name: 'home' })
        } else {
          errorMessage.value = '아이디와 비밀번호를 확인해주세요'
          console.error('액세스 토큰 없음');
        }
      })
      .catch((error) => {
        errorMessage.value = '아이디와 비밀번호를 확인해주세요'
        console.error(error)
        router.push({ name: 'userLogin' })
      })
  }

  const logout = function () {
    sessionStorage.removeItem('access-token');
    console.log('로그아웃 완료');
    alert('로그아웃 성공')
    router.push({ name: 'home' })
  };

  const getPasswordHint = function (passwordFinderForm) {
    axios.post(`${REST_USER_API}/password`, passwordFinderForm)
      .then((response) => {
        if (response.data && response.data.endsWith('*')) {
          passwordHint.value = response.data;
        } else {
          passwordHint.value = '일치하는 계정이 없습니다';
        }
      })
      .catch((error) => {
        console.log(error)
        passwordHint.value = '일치하는 계정이 없습니다'
        router.push({ name: 'userLogin' })
      })
  }

  const getFortune = function () {
    axios.get(`${REST_USER_API}/fortune`, {
      headers: {
        'access-token': sessionStorage.getItem('access-token')
      }
    })
      .then((response) => {
        fortune.value = response.data
      })
      .catch((error) => {
        console.log(error)
        router.push({ name: 'todayFortune' })
      })
  }

  return {
    userList, loginUser, errorMessage, passwordHint, fortune,
    getUserList, getUser, signup, modifyUser, login, logout, getPasswordHint, getFortune,
  }
})