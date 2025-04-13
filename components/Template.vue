<template>
    <div class="max-w-3xl mx-auto py-10 pl-6 text-sm md:text-lg lg:text-xl">
        <NuxtLink to="posts"> ← All Posts</NuxtLink>
    </div>
    <div class="max-w-3xl mx-auto pb-6 px-6 text-gray-800">
    <header class="mb-8">
        <h1 class="text-3xl font-bold">{{ title }}</h1>
        <p class="text-sm text-gray-500">{{ author }} · {{ date }} · {{ readTime }}</p>
        <p class="mt-4">{{ description }}</p>
        <img :src="mainImage" alt="Main Image" class="mt-4 rounded-lg mx-auto block" />
    </header>

    <div v-for="section in sections" :key="section.title" class="mb-10">
        <h2 class="text-xl font-semibold mb-2">{{ section.title }}</h2>
        <p class="mb-4" v-if="section.subtitle">{{ section.subtitle }}</p>
        <img v-if="section.image" :src="section.image" alt="" class="mb-4 post-image rounded" />

        <div v-for="(point, index) in section.points" :key="index" class="mb-2">
        <details class="p-3 rounded cursor-pointer group">
            <summary class="font-bold italic text-base flex items-center gap-2 list-none">
                <img src="public/arrow.svg" class="text-black w-4 h-4 transition-transform group-open:rotate-90">
                {{ point.title }}
            </summary>
            <div class="mt-2 pl-6 text-sm" v-html="point.description"></div>
        </details>
        </div>
    </div>
    </div>
</template>


<script setup>
defineProps({
    title: String,
    author: String,
    date: String,
    readTime: String,
    description: String,
    mainImage: String,
    sections: Array
})
</script>

<style scoped>
.post-image {
    width: 300px;
    height: 200px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
}

  summary::-webkit-details-marker {
    display: none;
  }
</style>