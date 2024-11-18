<template>
    
  components: { BoardSearchInput },<div>
        <table>
            <thead>
                <tr>
                    <th>작성자</th>
                    <th>제목</th>
                    <th>조회수</th>
                    <th>생성일</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="board in paginatedBoards" :key="board.id">
                    <td>{{ board.userName }}</td>
                    <td>
                        <RouterLink :to="`/board/${boardId}`">{{ board.title }}</RouterLink>
                    </td>
                    <td>{{ board.viewCnt }}</td>
                    <td>{{ board.createdAt }}</td>
                </tr>
            </tbody>
        </table>

        <BoardPagination
            :totalItems="store.boardList.length"
            :itemsPerPage="8"
            v-model:currentPage="currentPage"
        />
        <BoardSearchInput/>
    </div>
</template>

<script setup>
import { useBoardStore } from '@/stores/board';
import { onMounted } from 'vue';
import BoardPagination from './BoardPagination.vue';
import BoardSearchInput from './BoardSearchInput.vue';

const store = useBoardStore()
const currentPage = ref(1)

const paginatedBoards = computed(() => {
    const start = (currentPage.value - 1) * 8
    const end = start + 8
    return store.boardList.slice(start, end)
})

onMounted(() => {
    store.getBoardList()
})
</script>

<style scoped>

</style>