<template>
    <div>
        <fieldset>
            <legend>수정</legend>
            <div>
                <label for="accountId">계정ID : </label>
                <input type="text" id="accountId" v-model="user.accountId" readonly>
            </div>
            <div>
                <label for="nickname">닉네임 : </label>
                <input type="text" id="nickname" v-model="user.nickname" readonly>
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
                <button @click="updateUser">수정</button>
            </div>
        </fieldset>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { ref, onMounted } from 'vue';

const store = useUserStore();

const user = ref({
    accountId: '',
    password: '',
    nickname: '',
    birthDate: '',
});

onMounted(() => {
    user.value.accountId = store.user.accountId;
    user.value.nickname = store.user.nickname;
    user.value.password = store.user.password;
    user.value.birthDate = store.user.birthDate;
});

const updateUser = function () {
    store.updateUser(user.value);
};
</script>

<style scoped>

</style>