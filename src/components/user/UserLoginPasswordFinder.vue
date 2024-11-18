<template>
    <div>
        <fieldset>
            <legend>비밀번호 찾기</legend>
            <div>
                <label for="accountId">계정ID : </label>
                <input type="text" id="accountId" v-model="loginRequestForm.accountId">
            </div>
            <div>
                <label for="nickname">닉네임 : </label>
                <input type="text" id="nickname" v-model="loginRequestForm.nickname">
            </div>
            <div>
                <button @click="getPasswordHint">비밀번호 찾기</button>
            </div>
        </fieldset>

        <div v-if="passwordHint">
            <p>비밀번호 힌트: {{ passwordHint }}</p>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

const store = useUserStore();

const loginRequestForm = ref({
    accountId: '',
    nickname: '',
});

const passwordHint = ref('');

const getPasswordHint = function () {
    passwordHint.value = store.findPassword(loginRequestForm.value);
};
</script>

<style scoped>

</style>