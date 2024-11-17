import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

axios.defaults.baseURL = 'http://localhost:8080/api/boards'

export const useBoardStore = defineStore('board', () => {

    const boardList = ref([])
    const board = ref({})
    const searchConditionForm = ref({})

    const getBoardList = function () {
        axios.get('', {
            headers: {
                'access-token': sessionStorage.getItem('access-token')
            }
        })
            .then((response) => {
            boardList.value = response.data
            })
            .catch((error) => {
            console.log(error)
        })
    }

    const searchBoard = function (searchConditionForm) {
        axios.get('/search', {
            params: searchConditionForm,
            headers: {
                'access-token': sessionStorage.getItem('access-token')
            }
        })
            .then((response) => {
            boardList.value = response.data
            })
            .catch((error) => {
            console.log(error)
        })
    }

    const getBoard = function () {
        axios.get('/${boardId}', {
            headers: {
                'access-token': sessionStorage.getItem('access-token')
            }
        })
            .then((response) => {
            board.value = response.data
            })
            .catch((error) => {
            console.log(error)
        })
    }

    const createBoard = function (board) {
        axios.post('', {
            data: board,
            headers: {
                'access-token': sessionStorage.getItem('access-token')
            }
        })
            .then(() => {
            router.push({name: boardList})
            })
            .catch((error) => {
            console.log(error)
        })
    }

    const modifyBoard = function (board) {
        axios.put('', {
            data: board,
            headers: {
                'access-token': sessionStorage.getItem('access-token')
            }
        })
            .then(() => {
            router.push({name: boardList})
            })
            .catch((error) => {
            console.log(error)
        })
    }

    const removeBoard = function () {
        axios.delete('/${boardId}', {
            headers: {
                'access-token': sessionStorage.getItem('access-token')
            }
        })
            .then(() => {
            getBoardList()
            router.push({name: boardList})
            })
            .catch((error) => {
            console.log(error)
        })
    }

    return {
        boardList, board, searchConditionForm,
        getBoardList, searchBoard, getBoard, createBoard, modifyBoard, removeBoard,
    }
})