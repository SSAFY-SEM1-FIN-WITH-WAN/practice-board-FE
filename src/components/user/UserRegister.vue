<template>
    <div>
        <fieldset>
            <legend>등록</legend>
            <div>
                <label for="accountId">계정ID : </label>
                <input type="text" id="accountId" v-model="user.accountId">
            </div>
            <div>
                <label for="nickname">닉네임 : </label>
                <input type="text" id="nickname" v-model="user.nickname">
            </div>
            <div>
                <label for="password">비밀번호 : </label>
                <input type="password" id="password" v-model="user.password">
            </div>
            <div>
                <label for="birthDate">생일 : </label>
                <input type="date" id="birthDate" v-model="user.birthDate">
            </div>
            <div>
                <button @click="registerUser">등록</button>
            </div>
        </fieldset>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { ref } from 'vue'

const store = useUserStore()

const user = ref({
    accountId: '',
    password: '',
    nickname: '',
    birthDate: '',
})

const registerUser = function () {
    store.signup(user.value)
}

</script>

<style scoped>

</style>