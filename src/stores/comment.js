import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_BOARD_API = `http://localhost:8080/api/boards`

export const useCommentStore = defineStore('commentStore', () => {

  const commentList = ref([])
  const comment = ref({})

  const getCommentList = function (boardId) {
    axios.get(`${REST_BOARD_API}/${boardId}/comments`)
      .then((response) => {
        commentList.value = response.data
      })
      .catch((error) => {
        console.log(error)
        router.push(`/board/${boardId}`)
      })
  }

  const addComment = function (boardId, comment) {
    axios.post(`${REST_BOARD_API}/${boardId}/comments`, comment, {
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

  const modifyComment = function (boardId, commentId, newContent) {
    axios.put(`${REST_BOARD_API}/${boardId}/comments/${commentId}`, newContent, {
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

  const removeComment = function (boardId, commentId) {
    axios.delete(`${REST_BOARD_API}/${boardId}/comments/${commentId}`, {
      headers: {
        'access-token': sessionStorage.getItem('access-token')
      }
    })
      .then(() => {
        alert('댓글이 삭제 되었습니다')
        router.push(`/board/${boardId}`)
      })
      .catch((error) => {
        console.log(error)
        alert('댓글 삭제 중 문제가 발생했습니다')
        router.push(`/board/${boardId}`)
      })
  }

  return {
    commentList, comment,
    getCommentList, addComment, modifyComment, removeComment,
  }
})