<template>
    <header class="header">
        <div class="logo">
            <img src="@/assets/logo.png" alt="Logo" />
            <span class="title">Restaurant Management System</span>
        </div>
        <nav class="nav">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/Manage" class="nav-link">Manage</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
            <button class="logout" @click="handleLogout">Logout</button>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderPage',
    methods:{
        handleLogout() {
            // Handle logout logic here
            console.log('User logged out');
            localStorage.clear();
            // Redirect to login page or perform other actions
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    background: #2c3e50;
    color: #fff;
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    height: 40px;
    margin-right: 12px;
}

.title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
}

.nav {
    display: flex;
    gap: 24px;
}

.nav-link {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.2s;
}

.nav-link:hover {
    color: #42b983;
}
.logout {
    background: #42b983;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.2s;
}
.logout:hover {
    background: #38a169;
}
</style>