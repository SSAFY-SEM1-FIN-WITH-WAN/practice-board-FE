<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from "vue-router";
import { useBoardStore } from '@/stores/board'
import { useBoardImageStore } from '@/stores/boardImage'
import BoardSearchInput from '@/components/board/BoardSearchInput.vue'

const router = useRouter();
const boardStore = useBoardStore()
const boardImageStore = useBoardImageStore()

const currentPage = ref(1)
const perPage = 12
const pageCount = computed(() => {
    return Math.ceil(boardStore.boardList.length / perPage)
})
const clickPage = function (page) {
    currentPage.value = page
}
const currentPageBoardList = computed(() => {
    return boardStore.boardList.slice((currentPage.value-1)*perPage, currentPage.value*perPage)
})

const thumbnailMap = ref({})
watch(() => boardImageStore.boardImageThumbList, (newList) => {
    thumbnailMap.value = newList.reduce((map, image) => {
        map[image.boardId] = image.filePath;
        return map;
    }, {});
    console.log("Updated Thumbnail Map:", thumbnailMap.value);
    console.log("Thumb List:", boardImageStore.boardImageThumbList);
}, { immediate: true });

const createBoard = function () {
    router.push({ name: "boardCreate" });
};

onMounted(() => {
    boardStore.getBoardList()
    boardImageStore.getBoardImageThumbsList()
})
</script>

<template>
  <div class="container">
    <BoardSearchInput />
    <hr />
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
      <div class="col" v-for="board in currentPageBoardList" :key="board.id">
        <div class="card h-100">
          <RouterLink :to="`/board/${board.id}`">
            <img
              v-if="thumbnailMap[board.id]"
              :src="thumbnailMap[board.id]"
              class="card-img-top"
              alt="게시글 썸네일"
            />
            <img
              v-else
              src="@/assets/no-image-500.png"
              class="card-img-top"
              alt="이미지 없음"
            />
          </RouterLink>
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <RouterLink :to="`/board/${board.id}`" class="card-title-link">
                <h5 class="card-title mb-0">{{ board.title }}</h5>
              </RouterLink>
              <div class="view-count">
                <span>{{ board.viewCnt }}</span>
              </div>
            </div>
            <hr />
            <div class="text-muted text-end">
              작성자: {{ board.userName }} <br />
              등록일: {{ board.createdAt }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation">
      <ul class="pagination d-flex justify-content-center mt-4">
        <li class="page-item">
          <a
            class="page-link"
            @click.prevent="currentPage--"
            :class="{ disabled: currentPage <= 1 }"
            href="#"
            >&lt;</a
          >
        </li>
        <li
          class="page-item"
          :class="{ active: currentPage == page }"
          v-for="page in pageCount"
          :key="page"
        >
          <a href="#" class="page-link" @click.prevent="clickPage(page)">{{ page }}</a>
        </li>
        <li class="page-item">
          <a
            class="page-link"
            @click.prevent="currentPage++"
            :class="{ disabled: currentPage >= pageCount }"
            href="#"
            >&gt;</a
          >
        </li>
      </ul>
      <div class="text-center mt-3">
        <button class="btn btn-outline-success" @click="createBoard">등록</button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 250px;
  cursor: pointer;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
}

.card-title-link {
  text-decoration: none;
  color: inherit;
}

.card-title-link:hover {
  color: #007bff;
}

.view-count {
  display: inline-block;
  background-color: #f0f0f0;
  color: #555;
  font-size: 0.875rem;
  font-weight: bold;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}

.text-muted {
  font-size: 0.875rem;
}

.row-cols-2 > .col,
.row-cols-md-3 > .col,
.row-cols-lg-4 > .col {
  margin-bottom: 20px;
}
</style>