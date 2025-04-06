<template>
    <div class="welcome" @click="navigateToHome">
        <img :src="welcomeImg" alt="welcome" class="full-image" />
        <div class="overlay">
            <h1>Portfolio</h1>
            <h2>NODA MARI</h2>
            <p>クリックしてご覧ください</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import welcomeImg from '@/assets/welcome-img.jpg'
import router from '../router';


const navigateToHome: () => void = () => {
    router.push("Home")
}

</script>

<style scoped>
.welcome {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.full-image {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    min-height: 100vh;
    margin: auto;
}

.overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #bbd4f0;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    z-index: 1;
}

.overlay h1 {
    font-size: 2.5rem;
    margin: 0;
}

.overlay p {
    font-size: 1.2rem;
    margin-top: 1rem;
}
</style>