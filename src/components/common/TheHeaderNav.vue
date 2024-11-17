<template>
    <div>
        <div>
            <nav>
                <RouterLink :to="{ name: 'home' }">WhatsYouLook</RouterLink> |
                <RouterLink :to="{ name: 'boardList' }">게시판</RouterLink> |
                <RouterLink :to="{ name: 'todayFortune' }">오늘의운세</RouterLink> |
                <RouterLink :to="{ name: 'userRegister' }">회원가입</RouterLink> |
                <button v-if="isLoggedIn" @click="logout">로그아웃</button>
                <button v-else @click="login">로그인</button>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const isLoggedIn = ref(sessionStorage.getItem('access-token') !== null);

const login = function () {
    router.push({name: 'userLogin'})
}

const logout = function () {
    sessionStorage.removeItem('access-token')
    isLoggedIn.value = false;
    router.push({ name: 'home'})
}

</script>

<style scoped>
  nav {
      text-align: center;
  }

  nav a {
      font-weight: bold;
      text-decoration: none;
      color: black;
  }

  nav a.router-link-exact-active {
      color: #42b983
  }
</style>