<template>
    <div>
        <fieldset>
            <legend>로그인</legend>
            <div>
                <label for="accountId">계정 ID : </label>
                <input type="text" id="accountId" v-model="user.accountId">
            </div>
            <div>
                <label for="password">비밀번호 : </label>
                <input type="password" id="password" v-model="user.password">
            </div>
            <div>
                <button @click="login">로그인</button>
            </div>
        </fieldset>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

const store = useUserStore();

const user = ref({
    accountId: '',
    password: '',
});

const login = function () {
    store.login(user.value);
};
</script>

<style scoped>

</style>