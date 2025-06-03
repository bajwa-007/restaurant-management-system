<template>
    <HeaderPage />
    <div class="homePage">
        <h1>Welcome to the Home Page</h1>
        <p>This is a simple home page built with Vue.js.</p>
    </div>
</template>

<script>
import HeaderPage from './Header.vue';
export default {
    name: 'HomePage',
    components: {
        HeaderPage
    },
    mounted(){
        console.warn("mounted")
        let userInfo = localStorage.getItem('user-info');
        if(!userInfo) {
            this.$router.push('/signup');
        } else {
            console.warn("No user info found in localStorage.");
        }
    }
}
</script>

<style scoped>
.homePage {
    text-align: center;
    margin-top: 50px;
}
</style>