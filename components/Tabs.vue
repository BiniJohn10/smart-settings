<template>
    <div class="flex justify-between items-center p-8 bg-white">
    <NuxtLink to="/" class="logo-font font-extrabold text-3xl">SmartSettings</NuxtLink>
    <ul class="flex gap-6">
        <li>
        <NuxtLink
            to="/"
            :class="linkClass('/')"
        >
            Home
        </NuxtLink>
        </li>
        <li>
        <NuxtLink
            to="/posts"
            :class="linkClass('/posts')"
        >
            Posts
        </NuxtLink>
        </li>
        <!-- <li>
        <NuxtLink
            to="/home-device-settings"
            :class="linkClass('/home-device-settings')"
        >
            Home Device Settings
        </NuxtLink>
        </li> -->
    </ul>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// Function to return class based on active route
const linkClass = (path) => {
    return route.path === path
    ? 'text-black font-semibold transition duration-200'
    : 'text-gray-800 hover:underline hover:decoration-gray-400 hover:underline-offset-4 transition duration-200'
}
</script>

<style scoped>
</style>
