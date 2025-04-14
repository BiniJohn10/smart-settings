<script setup>
import Template from '~/components/Template.vue'

const data = {
  title: 'Protecting Your Privacy: Understanding the Risks of Data Collected by Smart Home Devices.',
  author: 'BiniJohn',
  date: 'May 12, 2023',
  readTime: '2 min read',
  mainImage: '/lock.png',
}
</script>

<template>
    <div class="max-w-3xl mx-auto py-10 pl-6 text-sm md:text-lg lg:text-xl">
        <NuxtLink to="posts"> ← All Posts</NuxtLink>
    </div>
    <div class="max-w-3xl mx-auto pb-6 px-6 text-gray-800">
        <div class="mb-8">
            <h1 class="text-3xl font-bold">{{ data.title }}</h1>
            <p class="text-sm text-gray-500">{{ data.author }} · {{ data.date }} · {{ data.readTime }}</p>
            <div class="flex flex-col md:flex-row items-center">
                <img src='public/lock.png' alt="Main Image" class="rounded-lg post-image" />
                <p class="ml-4 pt-6 md:ml-4">
                    As the use of smart home devices continues to grow, it is important to understand the data that these devices collect and how it can be exploited by cybercriminals. Smart home devices such as smart TVs, speakers, thermostats, hubs, and security systems can collect a wide range of data, including location data, viewing habits, contacts, app usage, voice commands, calendar events, identifiable personal information, login details, etc., of connected devices. <br><br>
                </p>
            </div>
            <p>
                To protect your privacy and sensitive information, it is important to understand the data collected by your smart home devices and take steps to secure it. You can limit the amount of data collected or delete it altogether by using privacy controls offered by your devices. You should also enable strong passwords and two-factor authentication to prevent unauthorized access to your devices and network. Keeping your devices up-to-date with the latest firmware updates is also important, as manufacturers frequently release security patches to address vulnerabilities. It is also recommended to use a private, secure network, such as a virtual private network (VPN), when connecting your smart home devices to the internet. <br><br>
                While smart home devices offer convenience and comfort, they also come with potential risks to your privacy and security. By understanding the data collected by your devices and taking steps to secure it, you can enjoy the benefits of smart home technology without putting yourself at risk.
            </p>
        </div>
    </div>
</template>

<style scoped>
.post-image {
    width: 300px;
    height: 200px;
    object-fit: cover;
    display: block;
    margin: 1rem 0; /* Remove margin for flex alignment */
}

@media (max-width: 768px) {
    .flex {
        flex-direction: column; /* Stack items vertically on mobile */
    }
    .ml-4 {
        margin-left: 0; /* Remove left margin on mobile */
        margin-top: 1rem; /* Add top margin for spacing */
    }
}
</style>