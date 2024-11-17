<template>
    <div>
        <fieldset>
            <legend>내 정보</legend>
            <div>
                <p><strong>계정 ID: </strong>{{ user.accountId }}</p>
                <p><strong>닉네임: </strong>{{ user.nickname }}</p>
                <p><strong>생일: </strong>{{ user.birthDate }}</p>
                <p><strong>별자리: </strong>{{ user.zodiacSign }}</p>
                <p><strong>가입일: </strong>{{ user.createdAt }}</p>
            </div>
        </fieldset>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue';

const store = useUserStore();

onMounted(() => {
    store.getUser();
});
</script>

<style scoped>

</style>
