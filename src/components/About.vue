<template>
    <Header />
    <div class="about">
        <h1>About Us</h1>
        <p>
            Welcome to our project! This page provides information about our team and the purpose of this application.
        </p>
        <ul>
            <li>Project Name: RMS Project</li>
            <li>Version: 1.0.0</li>
            <li>Team: Dedicated developers passionate about delivering quality software.</li>
        </ul>
    </div>
</template>

<script>
import Header from './Header.vue';
export default {
    name: 'AboutPage',
    components: {
        Header
    },
    mounted(){
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
.about {
    max-width: 600px;
    margin: 40px auto;
    padding: 24px;
    background: #f9f9f9;
    border-radius: 8px;
}
.about h1 {
    margin-bottom: 16px;
}
.about ul {
    margin-top: 16px;
    padding-left: 20px;
}
</style>