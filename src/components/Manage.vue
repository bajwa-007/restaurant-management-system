<template>
    <div class="manage-restaurant">
        <h1>Manage Restaurant</h1>
        <form @submit.prevent="saveRestaurant">
            <div class="form-group">
                <label for="name">Restaurant Name</label>
                <input v-model="restaurant.name" id="name" type="text" required />
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input v-model="restaurant.address" id="address" type="text" required />
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input v-model="restaurant.phone" id="phone" type="tel" required />
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea v-model="restaurant.description" id="description"></textarea>
            </div>
            <button type="submit">Save</button>
        </form>
        <div v-if="message" class="message">{{ message }}</div>
    </div>
</template>

<script>
export default {
    name: 'ManageRestaurant',
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                phone: '',
                description: ''
            },
            message: ''
        };
    },
    methods: {
        saveRestaurant() {
            // Simulate API call
            this.message = 'Restaurant details saved successfully!';
            // In real app, send `this.restaurant` to backend here
        }
    }
};
</script>

<style scoped>
.manage-restaurant {
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.form-group {
    margin-bottom: 1rem;
}
label {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: bold;
}
input, textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}
button {
    padding: 0.5rem 1.5rem;
    background: #42b983;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.message {
    margin-top: 1rem;
    color: #42b983;
    font-weight: bold;
}
</style>