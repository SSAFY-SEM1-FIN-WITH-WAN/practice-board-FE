<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore();

const passwordFinderForm = ref({
    accountId: '',
    nickname: '',
})

const getPasswordHint = function () {
    userStore.getPasswordHint(passwordFinderForm.value)
}

</script>

<template>
    <div class="container py-5">
        <div class="card shadow-sm mx-auto" style="max-width: 400px;">
            <div class="card-body">
                <div>
                    <form @submit.prevent="getPasswordHint">
                        <div class="form-floating mb-3" style="max-width: 350px; margin: 0 auto;">
                            <input type="text" class="form-control" id="accountId" placeholder="아이디" v-model="passwordFinderForm.accountId">
                            <label for="accountId">아이디</label>
                        </div>
                        <div class="form-floating mb-3" style="max-width: 350px; margin: 0 auto;">
                            <input type="text" class="form-control" id="nickname" placeholder="닉네임" v-model="passwordFinderForm.nickname">
                            <label for="nickname">닉네임</label>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary w-100">비밀번호 찾기</button>
                        </div>
                    </form>

                    <div v-if="userStore.passwordHint" class="mt-3 text-center">
                        <h5>{{ userStore.passwordHint }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
form {
    max-width: 350px;
    margin: 0 auto;
}
</style>