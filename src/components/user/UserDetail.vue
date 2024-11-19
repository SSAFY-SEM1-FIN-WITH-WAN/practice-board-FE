<script setup>
import { onMounted } from 'vue'
import { useRouter } from "vue-router";
import { useUserStore } from '@/stores/user'

const router = useRouter();
const userStore = useUserStore();

const modifyUser = function () { 
    router.push({name: 'userUpdate'})
}

onMounted(() => {
    userStore.errorMessage = ''
    userStore.getUser()
})

</script>

<template>
    <div class="container py-5">
        <div class="d-flex justify-content-center">
            <div class="card shadow-sm" style="width: 30rem; border-radius: 12px; overflow: hidden;">
                <div class="card-header bg-primary text-white text-center">
                    <h4 class="card-title m-0">마이페이지</h4>
                </div>
                <div class="card-body">
                    <div class="mb-4">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span>아이디</span>
                                <strong>{{ userStore.loginUser.accountId }}</strong>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span>계정등급</span>
                                <strong>{{ userStore.loginUser.type }}</strong>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span>닉네임</span>
                                <strong>{{ userStore.loginUser.nickname }}</strong>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span>별자리</span>
                                <strong>{{ userStore.loginUser.zodiacSign }}</strong>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span>생년월일</span>
                                <strong>{{ userStore.loginUser.birthDate }}</strong>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span>가입일</span>
                                <strong>{{ userStore.loginUser.createdAt }}</strong>
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-outline-success" @click="modifyUser">회원정보 수정</button>
                    </div>
                </div>
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