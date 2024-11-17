<template>
    <div>
        <TheHeaderNav/>
        <RouterView/>
        <TheFooterNav/>
    </div>
</template>

<script setup>
import TheFooterNav from './components/common/TheFooterNav.vue';
import TheHeaderNav from './components/common/TheHeaderNav.vue';

</script>

<style scoped>

</style>