<script setup lang="ts">
  const { slug } = useRoute().params
  const { data: post } = await useFetch(`/api/cms/blog/${slug}`)
</script>

<template>
  <h1>{{ post.title }}</h1>
  <NuxtLink to="/">
    Go to home
  </NuxtLink>
</template>
