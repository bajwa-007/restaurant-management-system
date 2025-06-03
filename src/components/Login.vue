<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="email" id="email" type="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" id="password" type="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
        <p v-if="error" class="error">{{ error }}</p>
        <p style="text-align:center; margin-top:16px;">
            Don't have an account?
            <router-link to="/signup">Sign up here</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "LoginPage",
    data() {
        return {
            email: "",
            password: "",
            error: ""
        };
    },
    methods: {
        async handleLogin() {
            try {
                // Simple validation example
                if (!this.email || !this.password) {
                    this.error = "Both fields are required.";
                    return;
                }
                // Simulate API call
                const response = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                )
                if (response.data.length > 0) {
                    console.warn("Login successful:", response.data);
                    localStorage.setItem('user-info', JSON.stringify(response.data));
                    this.$router.push('/');

                }
                else {
                    this.error = "Invalid email or password.";
                    return;
                }


            } catch (error) {
                console.error("Login failed:", error);
                this.error = "Invalid email or password.";
            }
        }
    },
    mounted() {
        console.warn("mounted")
        let userInfo = localStorage.getItem('user-info');
        if (userInfo) {
            this.$router.push('/');
        } else {
            console.warn("No user info found in localStorage.");
        }
    }
};
</script>

<style scoped>
.login-container {
    max-width: 350px;
    margin: 60px auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fafafa;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.3rem;
}

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 0.6rem;
    background: #1976d2;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
}

button:hover {
    background: #1565c0;
}

.error {
    color: #d32f2f;
    margin-top: 1rem;
    text-align: center;
}
</style>