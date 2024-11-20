import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_BOARD_API = `http://localhost:8080/api/boards`

export const useFileStore = defineStore('fileStore', () => {

  const imageFileList = ref([])
  const imageFileThumb = ref({})

  const getImageFileList = function (boardId) {
    axios.get(`${REST_BOARD_API}/${boardId}/images`)
      .then((response) => {
        imageFileList.value = response.data
      })
      .catch((error) => {
        console.log(error)
        router.push(`/board/${boardId}`)
      })
  }

  const getImageFileThumb = function (boardId) {
    axios.get(`${REST_BOARD_API}/${boardId}/images/thumb`)
      .then((response) => {
        imageFileThumb.value = response.data
      })
      .catch((error) => {
        console.log(error)
        router.push({ name: 'boardList' })
      })
  }

  const uploadImageFile = function (boardId, formData) {
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

  const removeImageFile = function (boardId, imageId) {
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
    imageFileList, imageFileThumb,
    getImageFileList, getImageFileThumb, uploadImageFile, removeImageFile,
  }
})