<script setup>
import { useRouter } from 'vue-router';
import { useBoardStore } from '@/stores/board'

const boardStore = useBoardStore()
const router = useRouter()

const modifyBoard = function () {
    boardStore.modifyBoard(boardStore.board.id)
}

const backButton = function () {
    router.go(-1);
}
</script>

<template>
    <div class="container py-5">
        <div class="card shadow-sm mx-auto" style="max-width: 400px;">
            <div class="card-header text-center bg-primary text-white">
                <h4>게시글 수정</h4>
            </div>
            <div class="card-body">
                <form @submit.prevent="modifyBoard">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="title" placeholder="제목" v-model="boardStore.board.title">
                        <label for="title">제목</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="content" placeholder="내용" v-model="boardStore.board.content">
                        <label for="text">내용</label>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn-primary w-100">수정</button>
                    </div>
                </form>
                <br/>
                <button class="btn btn-primary w-100" @click="backButton">뒤로</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
button {
    width: 100%;
    font-size: 1rem;
}

</style>