import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

axios.defaults.baseURL = 'http://localhost:8080/api/boards'

export const useFileStore = defineStore('file', () => {

    const ImageFileList = ref([])
    const ImageFile = ref({})
    const ImageFileThumb = ref({})

    const getImageFileList = function () {
        axios.get('/${boardId}/images', {
            headers: {
                'access-token': sessionStorage.getItem('access-token')
            }
        })
            .then((response) => {
                ImageFileList.value = response.data
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getImageFileThumb = function() {
        axios.get('/${boardId}/images/thumb', {
            headers: {
                'access-token': sessionStorage.getItem('access-token')
            }
        })
            .then((response) => {
                ImageThumb.value = response.data
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const uploadImageFile = function (files) {
        const formData = new FormData()

        files.forEach(file => {
            formData.append('images', file)
        })

        axios.post('/${boardId}/images', formData, {
            headers: {
                'access-token': sessionStorage.getItem('access-token'),
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(() => {
                router.push({ name: 'BoardDetail' })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const removeImageFile = function () {
        axios.delete('/${boardId}/images/${imageId}', {
            headers: {
                'access-token': sessionStorage.getItem('access-token')
            }
        })
            .then(() => {
                router.push({ name: 'BoardDetail' })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return {
        ImageFileList, ImageFile, ImageFileThumb,
        getImageFileList, getImageFileThumb, uploadImageFile, removeImageFile,
    }
})