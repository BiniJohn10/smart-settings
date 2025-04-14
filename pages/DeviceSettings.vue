<template>
  <div class="border-t border-gray-800 mb-20">
    <h1 class="font-bold text-3xl justify-center flex py-10">Smart Device Settings</h1>
    <div class="max-w-6xl mx-auto px-6">
      <p class="text-gray-600 mb-4">
        At SmartSettings I want to help you get the most out of your smart home device. With the easy-to-use filter, you can quickly find the right settings for the device you own. Get started to protect your smart home device today.
      </p>
      <div class="mb-6">
        <h2 class="font-semibold text-lg mb-2">Filter by device:</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <label v-for="device in devices" :key="device.title" class="flex items-center space-x-2">
            <input type="checkbox" v-model="selectedDevices" :value="device.title" class="form-checkbox">
            <span class=text-sm>{{ device.title }}</span>
          </label>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="device in filteredDevices"
          :key="device.title"
          class="border rounded-lg cursor-pointer shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200"
          @click="goToDevice(device.title)"
        >
          <img :src="device.image" :alt="device.title" class="w-full h-40 object-cover">
          <div class="p-4">
            <h3 class="font-bold text-lg mb-2">{{ device.title }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ device.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goToDevice = (title) => {
    router.push(`/devices/${encodeURIComponent(title)}`)
}

const devices = [
  {
    title: 'Aeotec Smart Home Hub (with SmartThings)',
    subtitle: 'The Aeotec Smart Home Hub is an internet-connected device that provides central control and management for your smart home devices...',
    image: '/Aeotec.png',
  },
  {
    title: 'Google Nest Hub',
    subtitle: 'Google Nest Hub is a smart display that allows you to control your smart home devices and access Google Assistant. Here are some privacy and security settings to consider...',
    image: '/google-nest-hub.png',
  },
  {
    title: 'Amazon Echo',
    subtitle: 'Amazon Echo devices use Alexa voice assistant and offer a wide range of features. Here are some key privacy and control settings to consider...',
    image: '/echo.png',
  },
  {
    title: 'Google Smart Speakers',
    subtitle: 'Google Nest and Google Home speakers use Google Assistant and offer customizable voice controls. Secure your setup with the following tips...',
    image: '/google-speakers.jpg',
  },
  {
    title: 'Apple Smart Speakers',
    subtitle: 'Apple HomePod and HomePod mini use Siri and offer great integration with the Apple ecosystem. Here’s how to enhance your privacy..',
    image: 'apple-speaker.png',
  },
  {
    title: 'Android or Google TV',
    subtitle: 'Android and Google TVs are popular streaming devices that offer access to a wide range of content and apps. Here are essential privacy and security settings...',
    image: '/androidtv.png',
  },
  {
    title: 'Apple TV',
    subtitle: 'Apple TV offers strong privacy features and integration with Apple services. These are key settings to enhance your privacy...',
    image: '/appletv.png',
  },
  {
    title: 'Amazon Fire TV',
    subtitle: 'Amazon Fire TV includes multiple options to manage privacy, limit data collection, and improve user control. Check these settings...',
    image: '/firetv.png',
  },
  {
    title: 'Samsung Smart TV',
    subtitle: 'Samsung smart TVs come with various features and settings that can be adjusted to enhance privacy and security. Here are some privacy and security setting setups for Samsung smart TV...',
    image: '/samsungtv.png',
  },
  {
    title: 'LG Smart TV',
    subtitle: 'LG smart TVs come with various features and settings that can be adjusted to enhance privacy and security. Here are some privacy and security setting setups for LG smart TV...',
    image: '/lgtv.png',
  },
  {
    title: 'Sony Smart TV',
    subtitle: 'Sony smart TVs also come with various features and settings that can be adjusted to enhance privacy and security. Here are some privacy and security setting setups for Sony smart TV...',
    image: '/sonytv.png',
  }
];

const selectedDevices = ref([]);

const filteredDevices = computed(() =>
  selectedDevices.value.length
    ? devices.filter((device) => selectedDevices.value.includes(device.title))
    : devices
);
</script>

<style scoped>
.form-checkbox {
  accent-color: #4a5568; /* Tailwind's gray-600 */
}
</style>
