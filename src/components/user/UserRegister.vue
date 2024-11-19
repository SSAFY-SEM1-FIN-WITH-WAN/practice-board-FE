<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore();

const user = ref({
    accountId: '',
    password: '',
    nickname: '',
    birthDate: '',
})

const signup = function () {
    userStore.signup(user.value)
}

onMounted(() => {
    userStore.errorMessage = ''
})

</script>

<template>
    <div class="container py-5">
        <div class="card shadow-sm mx-auto" style="max-width: 400px;">
            <div class="card-header text-center bg-primary text-white">
                <h4>회원가입</h4>
            </div>
            <div class="card-body">
                <div v-if="userStore.errorMessage" class="alert alert-danger text-center" role="alert">
                    {{ userStore.errorMessage }}
                </div>
                <form @submit.prevent="signup">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="accountId" placeholder="아이디" v-model="user.accountId">
                        <label for="accountId">아이디</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="password" placeholder="비밀번호" v-model="user.password">
                        <label for="password">비밀번호</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="nickname" placeholder="닉네임" v-model="user.nickname">
                        <label for="nickname">닉네임</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="date" class="form-control" id="birthDate" placeholder="생년월일" v-model="user.birthDate">
                        <label for="birthDate">생년월일</label>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-primary w-100">등록</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>