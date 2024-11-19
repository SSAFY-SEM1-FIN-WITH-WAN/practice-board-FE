import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

axios.defaults.baseURL = 'http://localhost:8080/api/boards'

export const useFileStore = defineStore('fileStore', () => {

  // const getImageFileList

  // const getImageFileThumb

  // const uploadImagefile

  // const removeImageFile

  return {
    getImageFileList, getImageFileThumb, uploadImageFile, removeImageFile,
  }
})