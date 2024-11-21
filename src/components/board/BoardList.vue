<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from "vue-router";
import { useBoardStore } from '@/stores/board'
import { useBoardImageStore } from '@/stores/boardImage'
import BoardSearchInput from '@/components/board/BoardSearchInput.vue'

const router = useRouter();
const boardStore = useBoardStore()
const boardImageStore = useBoardImageStore()

const currentPage = ref(1)
const perPage = 4
const pageCount = computed(() => {
    return Math.ceil(boardStore.boardList.length / perPage)
})
const clickPage = function (page) {
    currentPage.value = page
}
const currentPageBoardList = computed(() => {
    return boardStore.boardList.slice((currentPage.value-1)*perPage, currentPage.value*perPage)
})

const createBoard = function () {
    router.push({ name: "boardCreate" });
};

onMounted(() => {
    boardStore.getBoardList()
})
</script>

<template>
  <div class="container">
    <BoardSearchInput />
    <hr />
    <table class="table table-hover text-center">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>조회수</th>
          <th>등록일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in currentPageBoardList" :key="board.id">
          <td>{{ board.id }}</td>
          <td>
            <RouterLink :to="`/board/${board.id}`">{{board.title}}</RouterLink>
          </td>
          <td>{{ board.userName }}</td>
          <td>{{ board.viewCnt }}</td>
          <td>{{ board.createdAt }}</td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation">
      <ul class="pagination d-flex justify-content-center">
        <li class="page-item"><a class="page-link" @click.prevent="currentPage--" :class="{disabled: currentPage <= 1}" href="#">&lt;</a></li>
        <li class="page-item" :class="{active: currentPage == page}" v-for="page in pageCount" :key="page">
            <a href="#" class="page-link" @click.prevent="clickPage(page)">{{page}}</a>
        </li>
        <li class="page-item"><a class="page-link" @click.prevent="currentPage++" :class="{disabled: currentPage >= pageCount}" href="#">&gt;</a></li>
        <button class="mx-3 btn btn-outline-success" @click="createBoard">등록</button>
      </ul>
    </nav>
  </div>
</template>

<style scoped>

</style>