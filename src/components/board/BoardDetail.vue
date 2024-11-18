<template>
    <div>
        <div>
            <p hidden>ID: {{ store.board.id }}</p>
            <p>글쓴이: {{ store.board.username }}</p>
            <p>제목: {{ store.board.title }}</p>
            <p>내용: {{ store.board.content }}</p>
            <p>조회수: {{ store.board.viewCnt }}</p>
            <p>생성일: {{ store.board.createdAt }}</p>

            <button @click="boardRemove">삭제</button>
            <button @click="boardUpdate">수정</button>
        </div>
        <div>
            <div v-if="fileStore.ImageFileList.length === 0">
                <p>첨부된 이미지가 없습니다.</p>
            </div>
            <div v-else>
                <ul class="image-list">
                    <li v-for="(image, index) in fileStore.ImageFileList" :key="index">
                        <img :src="image.filePath" :alt="`이미지 ${index + 1}`"/>
                        <p>{{ image.fileName }}</p>
                        <button @click="removeImage(image.id)">이미지 삭제</button>
                    </li>
                </ul>
            </div>
        </div>
        <RouterView />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBoardStore } from "@/stores/board"
import { useFileStore } from '@/stores/file'

const route = useRoute()
const router = useRouter()
const boardStore = useBoardStore()
const fileStore = useFileStore()

onMounted(() => {
    boardStore.getBoard(route.params.id)
    fileStore.getImageFileList(boardId)
})

const boardRemove = function () {
    boardStore.boardRemove(boardStore.board.id)
}

const boardUpdate = function () {
    router.push({ name: 'boardUpdate' })
}

const removeImage = function (imageId) {
    const boardId = route.params.id
    fileStore.removeImageFile(boardId, imageId)
}
</script>

<style scoped>
.image-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.image-list li {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>