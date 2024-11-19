<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore();

onMounted(() => {
    userStore.getUserList()
})

</script>

<template>
    <div class="container py-5">
        <div class="d-flex justify-content-center flex-wrap">
            <div 
                v-for="user in userStore.userList" 
                :key="user.id" 
                class="card shadow-sm m-3" 
                style="width: 30rem; border-radius: 12px; overflow: hidden;"
            >
                <div class="card-header bg-primary text-white text-center">
                    <h4 class="card-title m-0">ID: {{ user.accountId }}</h4>
                </div>
                <div class="card-body">
                    <div class="mb-4">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span>계정등급</span>
                                <strong>{{ user.type }}</strong>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span>닉네임</span>
                                <strong>{{ user.nickname }}</strong>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span>별자리</span>
                                <strong>{{ user.zodiacSign }}</strong>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span>생년월일</span>
                                <strong>{{ user.birthDate }}</strong>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span>가입일</span>
                                <strong>{{ user.createdAt }}</strong>
                            </li>
                        </ul>
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