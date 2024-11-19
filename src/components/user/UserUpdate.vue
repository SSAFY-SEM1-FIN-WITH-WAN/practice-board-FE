<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user'

const userStore = useUserStore();
const router = useRouter()

const modifyUser = function () { 
    userStore.modifyUser()
}

const backButton = function () {
    router.go(-1);
}

onMounted(() => {
    userStore.errorMessage = ''
})

</script>

<template>
    <div class="container py-5">
        <div class="card shadow-sm mx-auto" style="max-width: 400px;">
            <div class="card-header text-center bg-primary text-white">
                <h4>회원수정</h4>
            </div>
            <div class="card-body">
                <div v-if="userStore.errorMessage" class="alert alert-danger text-center" role="alert">
                    {{ userStore.errorMessage }}
                </div>
                <form @submit.prevent="modifyUser">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="accountId" placeholder="아이디" readonly v-model="userStore.loginUser.accountId">
                        <label for="accountId">아이디</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="password" placeholder="비밀번호" v-model="userStore.loginUser.password">
                        <label for="password">비밀번호</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="nickname" placeholder="닉네임" v-model="userStore.loginUser.nickname">
                        <label for="nickname">닉네임</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="date" class="form-control" id="birthDate" placeholder="생년월일" v-model="userStore.loginUser.birthDate">
                        <label for="birthDate">생년월일</label>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-primary w-100">수정</button>
                    </div>
                </form>
                <br/>
                <button class="btn btn-primary w-100" @click="backButton">뒤로</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-header {
    font-size: 1.25rem;
    font-weight: bold;
}

.list-group-item {
    font-size: 1rem;
}

button {
    width: 100%;
    font-size: 1rem;
}
</style>