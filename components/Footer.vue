<template>
    <footer class="bg-gradient-to-b from-gray-800 to-black">
        <p class="logo-font">SmartSettings ©2025</p>
        <div class="social-icons">
            <a v-for="item in social" :key="item.id" :href="item.link" target="_blank" rel="noopener noreferrer">
                <img :src="item.icon" :alt="item.id" class="social-icon" />
            </a>
        </div>
    </footer>
</template>
<script setup>
const social = [
    {
        icon: 'github.svg',
        id: 'GitHub', 
        link: 'https://github.com/BiniJohn10',
    }, 
    {
        icon: 'linkedin.svg',
        id: 'LinkedIn', 
        link: 'https://www.linkedin.com/in/binitha-ann-j-18a9a1181/',
    }, 
    {
        icon: 'mail.svg',
        id: 'Mail', 
        link: 'mailto:binijoann@gmail.com',
    }, 



]
</script>

<style scoped>
footer {
    color: #fff;
    text-align: center;
    padding: 20px;
}

.social-icons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.social-icon {
    filter: brightness(0) invert(1);
    opacity: 0.75;
    transition: opacity 0.3s ease;
    width: 24px;
    height: 24px;
    margin: 0 10px;
}

.social-icon:hover {
    opacity: 1;
}
</style>
