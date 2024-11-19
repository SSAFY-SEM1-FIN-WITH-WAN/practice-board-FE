<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import UserPasswordFinder from '@/components/user/UserPasswordFinder.vue';

const userStore = useUserStore();

const loginRequestForm = ref({
    accountId: '',
    password: '',
})

const login = function () {
    userStore.login(loginRequestForm.value)
}

const showPasswordFinder = ref(false);

const togglePasswordFinder = function () {
    showPasswordFinder.value = !showPasswordFinder.value
}

onMounted(() => {
    userStore.errorMessage = ''
})

</script>

<template>
    <div class="container py-5">
        <div class="card shadow-sm mx-auto" style="max-width: 400px;">
            <div class="card-header text-center bg-primary text-white">
                <h4>로그인</h4>
            </div>
            <div class="card-body">
                <div v-if="userStore.errorMessage" class="alert alert-danger text-center" role="alert">
                    {{ userStore.errorMessage }}
                </div>
                <form @submit.prevent="login">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="accountId" placeholder="아이디" v-model="loginRequestForm.accountId">
                        <label for="accountId">아이디</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="password" placeholder="비밀번호" v-model="loginRequestForm.password">
                        <label for="password">비밀번호</label>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn-primary w-100">로그인</button>
                    </div>
                </form>

                <div v-if="!showPasswordFinder" class="text-center mt-3">
                    <button @click="togglePasswordFinder" class="btn btn-link">비밀번호를 잊으셨나요?</button>
                </div>

                <div v-if="showPasswordFinder">
                    <UserPasswordFinder />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>