import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

axios.defaults.baseURL = 'http://localhost:8080/api/boards'

export const useCommentStore = defineStore('commentStore', () => {

  // const getCommentList

  // const addComment

  // const modifyComment

  // const removeComment

  return {
    getCommentList, addComment, modifyComment, removeComment,
  }
})