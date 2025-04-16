<script setup>
import Template from '~/components/Template.vue'

const data = {
  title: 'Smart Hub',
  author: 'BiniJohn',
  date: 'Jan 2, 2025',
  readTime: '1 min read',
  description: 'A smart hub is a central device that connects and controls various smart home devices. It acts as a bridge between the internet and your smart home devices, allowing you to control them from a single interface.',
  mainImage: '/smart-hub.png',
  sections: [
    {
      title: 'Aeotec Smart Home Hub (with SmartThings)',
      subtitle: 'The Aeotec Smart Home Hub is an internet-connected device that provides central control and management for your smart home devices. Here are some general settings and best practices to keep in mind when using the Aeotec Smart Home Hub (while using it via SmartThings App):',
      image: '/Aeotec.png',
      points: [
        { title: 'Secure Wi-Fi Network', description: 'Ensure that your Wi-Fi network is secure with a <strong> strong, unique password and encryption enabled </strong>.' },
        { title: 'Hide the location of your hub', description: 'SmartThings app → Add now → Location→ Create new home → Add new room → Custom rooms.' },
        { title: 'Removing unused voice assistants or linked services', description: 'SmartThings app → Menu → Settings → Linked services → Tap Google Assistant or Alexa → Choose Uninstall → Delete → Confirm removal.' },
        { title: 'Review Privacy Settings', description: 'Take the time to review and customize privacy settings through the companion app or settings on your device. This includes managing permissions for features like remote access, data sharing, and third-party app integrations. <br><br>Menu → Settings → Personal Data → Tap Download to submit GDPR access and delete requests.' },
        { 
          title: 'Update Software', 
          description: `
            <strong>Option 1:</strong> Open SmartThings app → Menu → All devices → Select your hub’s name from the list of devices → Tap Use SmartThings hub → Manage hub → Device firmware updates → Tap the arrow button → Allow.<br><br>
            <strong>Option 2:</strong> Open SmartThings app → Devices → Home → Location that has your hub → Select hub from the list of devices → Tap More options → Information → Firmware version will be displayed along with other information about your hub.
          `
        },
        { title: 'Removing members from a location (room)', description: 'Home → Manage Location → Select Desired location → Members → More Options → Remove members → Select members to be removed → Tap Remove → Confirm by selecting Remove again.' },
        { title: 'Disable geolocation access (if not used often)', description: 'Home → Manage Location → Geolocation → Toggle Off.' },
      ]
    },
    {
    title: 'Google Nest Hub',
    subtitle: 'Google Nest Hub is a smart display that allows you to control your smart home devices and access Google Assistant. Here are some privacy and security settings to consider:',
    image: '/google-nest-hub.png',
    points: [
      { title: 'Disable Active Listening', description: 'Use the Mic Off switch on the device (usually on the back near the power cord).' },
      { title: 'Opt-Out of Data Sharing', description: 'Google Home app → Account → Manage your Google Account → Data & personalization → Turn off Voice and Audio Activity.' },
      { title: 'Delete Voice History', description: 'Google Home app → Your Activity → Delete recordings manually or by date. Or say: “Hey Google, delete what I said last week.”' },
      { title: 'Auto-Delete Voice Data', description: 'Google Home app → My Activity → Auto-delete → Choose 3, 18, or 36 months for automatic deletion.' },
      { title: 'Train Voice Match', description: 'Google Home app → Settings → Voice Match → Set up Voice Match and follow prompts. Repeat for each user.' },
    ]
  }
  ]
}
</script>

<template>
  <Template v-bind="data" />
</template>
