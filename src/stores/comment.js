import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'
import BoardDetail from '@/components/board/BoardDetail.vue'

axios.defaults.baseURL = 'http://localhost:8080/api/boards'

export const useCommentStore = defineStore('comment', () => {

    const commentList = ref([])
    const comment = ref({})

    const getCommentList = function () {
        axios.get('/${boardId}/comments', {
            headers: {
                'access-token': sessionStorage.getItem('access-token')
            }
        })
            .then((response) => {
            commentList.value = response.data
            })
            .catch((error) => {
            console.log(error)
        })
    }

    const addComent = function (comment) {
        axios.get('/${boardId}/comments', {
            data: comment,
            headers: {
                'access-token': sessionStorage.getItem('access-token')
            }
        })
            .then(() => {
            router.push({name: BoardDetail})
            })
            .catch((error) => {
            console.log(error)
        })
    }

    const modifyComment = function (comment) {
        axios.get('/${boardId}/comments', {
            data: comment,
            headers: {
                'access-token': sessionStorage.getItem('access-token')
            }
        })
            .then(() => {
            router.push({name: BoardDetail})
            })
            .catch((error) => {
            console.log(error)
        })
    }

    const removeComment = function () {
        axios.get('/${boardId}/comments/${commentId}', {
            headers: {
                'access-token': sessionStorage.getItem('access-token')
            }
        })
            .then(() => {
            router.push({name: BoardDetail})
            })
            .catch((error) => {
            console.log(error)
        })
    }

    return {
        commentList, comment, 
        getCommentList, addComent, modifyComment, removeComment,
     }
})