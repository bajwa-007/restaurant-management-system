<template>
    <div class="signup-container">
        <h2>Sign Up</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name</label>
                <input v-model="form.name" type="text" id="name" required />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="form.email" type="email" id="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="form.password" type="password" id="password" required />
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <p v-if="error" class="error">{{ error }}</p>
        <p style="text-align:center; margin-top:16px;">
            Already registered?
            <router-link to="/login">Login here</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "SignUp",
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: ""
            },
            error: ""
        };
    },
    methods: {
        async handleSubmit() {
            // Simple validation example
            if (!this.form.name || !this.form.email || !this.form.password) {
                this.error = "All fields are required.";
                return;
            }
            // Simulate API call
            this.error = "";
            alert("Sign up successful!\n" + JSON.stringify(this.form, null, 2));
            console.warn("Sign up data:", this.form);
            // Here you would typically send the data to your backend API
            await axios.post('http://localhost:3000/users', this.form)
                .then(response => {
                    console.warn("Sign up successful:", response.data);
                    localStorage.setItem('user-info', JSON.stringify(response.data));
                    this.$router.push('/'); // Redirect to home page after successful sign up
                    // Reset form
                    this.form.name = "";
                    this.form.email = "";
                    this.form.password = "";
                })
                .catch(error => {
                    console.error("Sign up error:", error);
                    this.error = "Sign up failed. Please try again.";
                });
            
        }
    },
    mounted(){
        console.warn("mounted")
        let userInfo = localStorage.getItem('user-info');
        if(userInfo) {
            this.$router.push('/');
        } else {
            console.warn("No user info found in localStorage.");
        }
    }
};
</script>

<style scoped>
.signup-container {
    max-width: 400px;
    margin: 40px auto;
    padding: 24px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fff;
}
h2 {
    text-align: center;
    margin-bottom: 24px;
}
.form-group {
    margin-bottom: 16px;
}
label {
    display: block;
    margin-bottom: 6px;
    font-weight: 500;
}
input[type="text"],
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #bbb;
    border-radius: 4px;
    box-sizing: border-box;
}
button {
    width: 100%;
    padding: 10px;
    background: #1976d2;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}
button:hover {
    background: #1565c0;
}
.error {
    color: #d32f2f;
    margin-top: 12px;
    text-align: center;
}
</style>