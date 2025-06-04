<template>
    <Header/>
    <div class="contact-page">
        <h1>Contact Us</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="name">Name:</label>
                <input v-model="form.name" type="text" id="name" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input v-model="form.email" type="email" id="email" required />
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea v-model="form.message" id="message" required></textarea>
            </div>
            <button type="submit">Send</button>
        </form>
        <div v-if="submitted" class="success-message">
            Thank you for contacting us!
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
export default {
    name: "ContactPage",
    components: {
        Header
    },
    data() {
        return {
            form: {
                name: "",
                email: "",
                message: "",
            },
            submitted: false,
        };
    },
    methods: {
        submitForm() {
            // Here you would typically send the form data to a server
            this.submitted = true;
            // Reset form if needed
            this.form.name = "";
            this.form.email = "";
            this.form.message = "";
        },
    },
    mounted(){
        let userInfo = localStorage.getItem('user-info');
        if(!userInfo) {
            this.$router.push('/signup');
        } else {
            console.warn("No user info found in localStorage.");
        }
    }
};
</script>

<style scoped>
.contact-page {
    max-width: 500px;
    margin: 40px auto;
    padding: 24px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.form-group {
    margin-bottom: 16px;
}
label {
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
}
input, textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}
button {
    padding: 10px 24px;
    background: #0078d4;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.success-message {
    margin-top: 20px;
    color: green;
    font-weight: bold;
}
</style>