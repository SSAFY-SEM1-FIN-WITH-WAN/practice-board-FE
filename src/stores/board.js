import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

axios.defaults.baseURL = 'http://localhost:8080/api/boards'

export const useBoardStore = defineStore('boardStore', () => {

  // const getBoardList

  // const searchBoard

  // const getBoard

  // const createBoard

  // const modifyBoard

  // const removeBoard

  return {
    getBoardList, searchBoard, getBoard, createBoard, modifyBoard, removeBoard,
  }
})