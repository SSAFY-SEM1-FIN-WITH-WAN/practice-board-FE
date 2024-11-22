<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBoardStore } from '@/stores/board'
import { useBoardImageStore } from '@/stores/boardImage'
import BoardImageUploader from '@/components/board/BoardImageUploader.vue';

const route = useRoute();
const router = useRouter()
const boardStore = useBoardStore()
const boardImageStore = useBoardImageStore()

const board = ref({
    title: '',
    content: '',
})

const images = ref([])

const createBoard = async function () {
    try {
        await boardStore.createBoard(board.value)

        if (images.value.length > 0) {
            await boardImageStore.uploadBoardImage(boardId, images.value)
        }

        router.push(`/board/${boardId}`)
    } catch (error) {
        console.log(error)
        router.push({ name: 'boardList' })
    }
}

</script>

<template>
    <div class="container py-5">
        <div class="card shadow-sm mx-auto" style="max-width: 400px;">
            <div class="card-header text-center bg-primary text-white">
                <h4>게시글 등록</h4>
            </div>
            <div class="card-body">
                <form @submit.prevent="createBoard">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="title" placeholder="제목" v-model="board.title">
                        <label for="title">제목</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="content" placeholder="내용" v-model="board.content">
                        <label for="text">내용</label>
                    </div>

                    <div class="mb-3">
                        <BoardImageUploader :images="images" />
                    </div>

                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn-primary w-100">등록</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>