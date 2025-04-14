<script setup>
import Template from '~/components/Template.vue'

const data = {
  title: 'Smart Speakers',
  author: 'BiniJohn',
  date: 'May 12, 2023',
  readTime: '1 min read',
  description: 'Smart speakers like Amazon Echo, Apple HomePod, and Google Nest offer voice-activated control for music, smart home devices, and more. It’s important to configure privacy and security settings to protect your personal information.',
  mainImage: '/smart-speakers.png',
  sections: [
    {
      title: 'Amazon Echo',
      subtitle: 'Amazon Echo devices use Alexa voice assistant and offer a wide range of features. Here are some key privacy and control settings to consider:',
      image: '/echo.png',
      points: [
        { title: 'Change Wake Word', description: 'Alexa app → Devices → Echo & Alexa → [Your Device] → Settings → Wake Word. Or say: “Alexa, change your wake word.”' },
        { title: 'Disable Active Listening', description: 'Press the microphone mute button on the device. The light will turn red to indicate listening is off.' },
        { title: 'Opt-Out of Data Sharing', description: 'Alexa app → Settings → Alexa Privacy → Manage how your data improves Alexa → Turn off data sharing toggles.' },
        { title: 'Don’t Save Voice Recordings', description: 'Alexa app → Settings → Alexa Privacy → Manage Your Alexa Data → Choose "Don’t Save Recordings".' },
        { title: 'Delete Command History', description: 'Alexa app → Settings → Alexa Privacy → Review Voice History. Or say “Alexa, delete everything I said today.”' },
        { title: 'Set Up Voice Recognition', description: 'Alexa app → More → Settings → Your Profile & Family → [Your Profile] → Add Your Voice. Repeat for other users or kids via Amazon Kids.' },
      ]
    },
    {
      title: 'Google Smart Speakers',
      subtitle: 'Google Nest and Google Home speakers use Google Assistant and offer customizable voice controls. Secure your setup with the following tips:',
      image: '/google-speakers.jpg',
      points: [
        { title: 'Disable Active Listening', description: 'Use the Mic Off switch on the device (usually on the back near the power cord).' },
        { title: 'Opt-Out of Data Sharing', description: 'Google Home app → Account → Manage your Google Account → Data & personalization → Turn off Voice and Audio Activity.' },
        { title: 'Delete Voice History', description: 'Google Home app → Your Activity → Delete recordings manually or by date. Or say: “Hey Google, delete what I said last week.”' },
        { title: 'Auto-Delete Voice Data', description: 'Google Home app → My Activity → Auto-delete → Choose 3, 18, or 36 months for automatic deletion.' },
        { title: 'Train Voice Match', description: 'Google Home app → Settings → Voice Match → Set up Voice Match and follow prompts. Repeat for each user.' },
      ]
    },
    {
      title: 'Apple Smart Speakers',
      subtitle: 'Apple HomePod and HomePod mini use Siri and offer great integration with the Apple ecosystem. Here’s how to enhance your privacy:',
      image: 'apple-speaker.png',
      points: [
        { title: 'Disable Active Listening', description: 'Say: “Hey Siri, stop listening” or go to Home app → Room → HomePod icon → Toggle "Listen for Hey Siri" OFF.' },
        { title: 'Delete Siri History', description: 'Home app → Settings → Siri History → Delete Siri History.' },
        { title: 'Set Up Voice Recognition', description: 'Home app → Tap and hold HomePod → Settings → Siri → Enable "Recognize My Voice" → Follow the prompts.' },
        { title: 'Turn Off Location Services', description: 'Home app → More (…) → Home Settings → Scroll down and disable Location Services for HomePod.' },
      ]
    }
  ]
}
</script>

<template>
  <Template v-bind="data" />
</template>
