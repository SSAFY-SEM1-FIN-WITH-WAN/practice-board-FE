<template>
    <div>
        <p><strong>오늘의 운세: </strong>{{ store.fortune.content }}</p>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue';

const store = useUserStore();

onMounted(() => {
    store.getFortune();
});
</script>

<style scoped>

</style>