<script setup>
import { ref } from 'vue'
import { useBoardStore } from '@/stores/board'
import { useFileStore } from '@/stores/file'
import BoardImageUploader from '@/components/board/BoardImageUploader.vue';

const boardStore = useBoardStore()
const fileStore = useFileStore()

const board = ref({
    title: '',
    content: '',
})

const createBoard = function () {
    boardStore.createBoard(board.value)
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