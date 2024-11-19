import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_BOARD_API = `http://localhost:8080/api/boards`

export const useBoardStore = defineStore('boardStore', () => {

  const boardList = ref([])
  const board = ref({})

  const getBoardList = function () {
    axios.get(REST_BOARD_API)
      .then((response) => {
      boardList.value = response.data
      })
      .catch((error) => {
        console.log(error)
        router.push({ name: 'home'})
    })
  }

  // const searchBoard

  const getBoard = function (boardId) {
    axios.get(`${REST_BOARD_API}/${boardId}`)
      .then((response) => {
      board.value = response.data
      })
      .catch((error) => {
        console.log(error)
        router.push({name: 'home'})
    })
  }

  const createBoard = function (board) {
    axios.post(REST_BOARD_API, board, {
      headers: {
        'access-token': sessionStorage.getItem('access-token')
      }
    })
      .then(() => {
        router.push({ name: 'boardList'})
      })
      .catch((error) => {
        console.log(error)
        router.push({ name: 'boardList' })
    })
  }

  const modifyBoard = function (boardId) {
    axios.put(`${REST_BOARD_API}/${boardId}`, board.value, {
      headers: {
        'access-token': sessionStorage.getItem('access-token')
      }
    })
      .then(() => {
      router.push(`/board/${boardId}`)
      })
      .catch((error) => {
      console.log(error)
      router.push(`/board/${boardId}`)
    })
  }

  // const removeBoard

  return {
    getBoardList, searchBoard, getBoard, createBoard, modifyBoard, removeBoard,
  }
})