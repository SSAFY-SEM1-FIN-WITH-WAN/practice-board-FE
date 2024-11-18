<template>
    <div class="pagination">
        <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
            &lt; 이전
        </button>

        <button v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }"
            @click="changePage(page)">
            {{ page }}
        </button>

        <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">
            다음 &gt;
        </button>
    </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue';

defineProps({
    totalItems: Number,
    itemsPerPage: Number,
    modelValue: Number
});

defineEmits(['update:modelValue']); // v-model 업데이트 이벤트

const totalPages = computed(() =>
    Math.ceil(props.totalItems / props.itemsPerPage)
);

const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        emit('update:modelValue', page);
    }
};
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.pagination button {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ddd;
    background-color: #fff;
    cursor: pointer;
}

.pagination button.active {
    font-weight: bold;
    background-color: #007BFF;
    color: #fff;
}

.pagination button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}
</style>