
<template>
      <SingleItem :device="device" />
</template>

<script setup>
import SingleItem from '@/components/SingleItemTemplate.vue'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useDevices } from '~/composables/devices.js'
const allDevices = useDevices()
const route = useRoute()
const deviceTitle = decodeURIComponent(route.params.title)
const device = ref(null)

onMounted(() => {
      device.value = allDevices.value.find(d => d.title === deviceTitle)
})
</script>