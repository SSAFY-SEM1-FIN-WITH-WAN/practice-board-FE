import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_BOARD_API = `http://localhost:8080/api/boards`

export const useBoardImageStore = defineStore('boardImageStore', () => {

  const boardImageThumbList = ref([])
  const boardImageList = ref([])

  const getBoardImageThumbsList = function () {
    axios.get(`${REST_BOARD_API}/thumbs`)
      .then((response) => {
        boardImageThumbList.value = response.data
      })
      .catch((error) => {
        console.log(error)
        router.push({ name: 'boardList' })
      })
  }

  const getBoardImageList = function (boardId) {
    axios.get(`${REST_BOARD_API}/${boardId}/images`)
      .then((response) => {
        boardImageList.value = response.data
      })
      .catch((error) => {
        console.log(error)
        router.push({ name: 'boardList' })
      })
  }

  const uploadBoardImage = function (boardId, formData) {
    axios.post(`${REST_BOARD_API}/${boardId}/images`, formData, {
      headers: {
        'access-token': sessionStorage.getItem('access-token'),
        'Content-Type': 'multipart/form-data'
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

  const removeBoardImage = function (boardId, imageId) {
    axios.delete(`${REST_BOARD_API}/${boardId}/images/${imageId}`, {
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

  return {
    boardImageThumbList, boardImageList,
    getBoardImageThumbsList, getBoardImageList, uploadBoardImage, removeBoardImage,
  }
})