<template>
    <div>
        <fieldset>
            <legend>사용자 목록</legend>
            <table>
                <thead>
                    <tr>
                        <th>계정 ID</th>
                        <th>닉네임</th>
                        <th>생일</th>
                        <th>별자리</th>
                        <th>가입일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in userList" :key="user.id">
                        <td>{{ user.accountId }}</td>
                        <td>{{ user.nickname }}</td>
                        <td>{{ user.birthDate }}</td>
                        <td>{{ user.zodiacSign }}</td>
                        <td>{{ user.createdAt }}</td>
                    </tr>
                </tbody>
            </table>
        </fieldset>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue';

const store = useUserStore();

onMounted(() => {
    store.getUserList();
});
</script>

<style scoped>

</style>
