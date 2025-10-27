<template>
    <div class="relative flex justify-between items-center p-8 bg-white">
        <NuxtLink to="/" class="logo-font font-extrabold text-3xl">SmartSettings</NuxtLink>

        <!-- Desktop nav -->
        <ul class="hidden md:flex gap-6">
            <li>
                <NuxtLink to="/" :class="linkClass('/')">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/posts" :class="linkClass('/posts')">Posts</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/DeviceSettings" :class="linkClass('/DeviceSettings')">Smart Devices</NuxtLink>
            </li>
        </ul>

        <!-- Mobile hamburger -->
        <button
            class="md:hidden p-2 rounded hover:bg-gray-100 focus:outline-none"
            @click="open = !open"
            :aria-expanded="open.toString()"
            aria-label="Toggle menu"
        >
            <template v-if="!open">
                <!-- hamburger -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </template>
            <template v-else>
                <!-- X icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </template>
        </button>

        <!-- Mobile menu -->
        <div
            v-show="open"
            class="md:hidden absolute right-4 top-full mt-2 bg-white shadow-lg rounded p-3 w-44 z-50"
        >
            <ul class="flex flex-col gap-2">
                <li>
                    <NuxtLink to="/" :class="mobileLinkClass('/')" @click="open = false">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/posts" :class="mobileLinkClass('/posts')" @click="open = false">Posts</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/DeviceSettings" :class="mobileLinkClass('/DeviceSettings')" @click="open = false">Smart Devices</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const open = ref(false)

// Function to return class based on active route (desktop)
const linkClass = (path) => {
    return route.path === path
    ? 'text-black font-semibold transition duration-200'
    : 'text-gray-800 hover:underline hover:decoration-gray-400 hover:underline-offset-4 transition duration-200'
}

// Slightly different (bigger touch area) mobile classes
const mobileLinkClass = (path) => {
    return route.path === path
    ? 'block text-black transition duration-200 bg-gray-800/20 rounded px-2 py-1'
    : 'block text-black hover:bg-gray-50 rounded px-2 py-1 transition duration-150'
}
</script>

<style scoped>
</style>
