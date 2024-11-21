<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";
import { useBoardStore } from "@/stores/board";
import { useCommentStore } from '@/stores/comment'
import { useBoardImageStore } from '@/stores/boardImage'
import CommentList from '@/components/comment/CommentList.vue'
import CommentCreate from '@/components/comment/CommentCreate.vue'

const route = useRoute();
const router = useRouter();
const boardStore = useBoardStore();
const commentStore = useCommentStore()
const boardImageStore = useBoardImageStore()

const boardId = route.params.boardId

const modifyBoard = function () {
    router.push({ name: "boardUpdate" });
};

const removeBoard = function () {
    boardStore.removeBoard(boardId)
};

const handleAddComment = function () {
  commentStore.getCommentList(boardId)
}

onMounted(() => {
    boardStore.getBoard(boardId)
    commentStore.getCommentList(boardId)
})
</script>

<template>
    <div class="container">
        <div class="d-flex justify-content-center">
            <div class="content-area" style="max-width: 1000px; margin: 0 auto;">
                <div class="card-body">
                    <div class="mb-3 d-flex justify-content-between align-items-center">
                        <h4 class="card-title">{{ boardStore.board.title }} <span class="badge bg-danger">{{ boardStore.board.viewCnt }}</span></h4>
                        <div class="d-flex justify-content-end">
                            <h6 class="card-subtitle mx-3 text-body-secondary">{{ boardStore.board.userName }}</h6>
                            <h6 class="card-subtitle text-body-secondary">{{ boardStore.board.createdAt }}</h6>
                        </div>
                    </div>
                    <p class="card-text">
                        {{ boardStore.board.content }}
                    </p>
                    <div class="d-flex justify-content-center">
                        <button class="mx-3 btn btn-outline-success" @click="modifyBoard">수정</button>
                        <button class="mx-3 btn btn-outline-danger" @click="removeBoard">삭제</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="comment-section">
            <CommentList :boardId="boardId" @commentAdded="handleAddComment" />
            <CommentCreate :boardId="boardId" @commentAdded="handleAddComment"/>
        </div>
    </div>
</template>

<style scoped>
.content-area {
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    background-color: #f8f9fa;
}

.comment-section {
    margin-top: 30px;
}
</style>