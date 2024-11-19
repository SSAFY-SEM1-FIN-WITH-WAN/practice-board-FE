<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore();

const logout = function () { 
    userStore.logout()
}
</script>

<template>
    <div>
        <nav>
            <RouterLink :to="{name: 'home'}">WhatsYouLook</RouterLink> |
            <RouterLink :to="{name: 'userAdmin'}">관리자</RouterLink> |
            <RouterLink :to="{name: 'userDetail'}">회원정보</RouterLink> |
            <RouterLink :to="{name: 'userLogin'}">로그인</RouterLink> |
            <a href="#" @click="logout">로그아웃</a> |
            <RouterLink :to="{name: 'userRegister'}">회원가입</RouterLink> |
            <RouterLink :to="{name: 'boardList'}">게시판</RouterLink> |
            <RouterLink :to="{name: 'todayFortune'}">오늘의운세</RouterLink>
        </nav>
    </div>
</template>

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