<template>
    <div>
        <hr />
        <div>
            <label for="title">제목 : </label>
            <input type="text" id="title" v-model="board.title">
        </div>
        <div>
            <label for="content">내용 : </label>
            <input type="text" id="content" v-model="board.content">
        </div>
        <BoardCreateImageUploader/>
        <div>
            <button @click="boardCreate">등록</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBoardStore } from "@/stores/board"
import BoardCreateImageUploader from './BoardCreateImageUploader.vue'

const store = useBoardStore()
const board = ref({
    title: '',
    content: '',
})

const boardCreate = function () {
    store.boardCreate(board.value)
}
</script>

<style scoped></style>