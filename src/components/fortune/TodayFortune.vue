<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore();

onMounted(() => {
    userStore.getFortune()
})

</script>

<template>
    <div class="container text-center my-5">
        <div class="card shadow-sm">
            <div class="card-header bg-primary text-white">
                <h1>오늘의 운세</h1>
            </div>
            <div class="card-body">
                <p class="card-text fs-4 text-secondary">{{ userStore.fortune.content }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>