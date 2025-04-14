<script setup>
import Template from '~/components/Template.vue'

const data = {
  title: 'Smart Streaming Devices',
  author: 'BiniJohn',
  date: 'May 12, 2023',
  readTime: '1 min read',
  description: 'Smart streaming devices allow you to stream movies, TV shows, and other content directly to your TV. These small, plug-and-play devices connect via HDMI and access the internet through Wi-Fi or Ethernet.',
  mainImage: '/streaming.jpg',
  sections: [
    {
      title: 'Android or Google TV',
      subtitle: 'Android and Google TVs are popular streaming devices that offer access to a wide range of content and apps. Here are essential privacy and security settings:',
      image: '/androidtv.png',
      points: [
        { title: 'Turn on Google Play Protect', description: 'Android TV (10 or lower): Settings → Apps → Security & restrictions → Enable "Verify apps".<br>Android TV (11 or up): Google Play Store app → Menu → Play Protect Settings → Enable "Scan apps with Play Protect".' },
        { title: 'Regular Software Updates', description: `
          <strong>Google TV:</strong> Quick Settings → Settings → System → About → System software update → Ensure "Automatically check for updates" is ON.<br>
          <strong>Android TV:</strong> Home → Help → Status & Diagnostics → System software update → Confirm "Automatic software download" is ON.
        `},
        { title: 'Reset Advertising ID', description: 'Home → Settings → Device → Preference → About → Legal information → Ads → Reset Advertising ID.' },
        { title: 'Delete Advertising ID', description: 'Home → Settings → Device → Preference → About → Highlight “Delete advertising ID,” press the D-Pad twice, then select.' },
      ]
    },
    {
      title: 'Apple TV',
      subtitle: 'Apple TV offers strong privacy features and integration with Apple services. These are key settings to enhance your privacy:',
      image: '/appletv.png',
      points: [
        { title: 'Disable Data Sharing', description: 'Settings → General → Privacy → Disable “Send Data to Apple”.' },
        { title: 'Adjust Location Services', description: 'Settings → General → Privacy → Location Services → Customize access for Siri, Time Zone, HomeKit, or individual apps.' },
        { title: 'Allow Apps to Ask Permission to Track You', description: 'Settings → General → Privacy → Tracking → Enable or disable “Allow Apps to Ask to Track”.' },
        { title: 'Adjust Bluetooth Access', description: 'Settings → General → Privacy → Bluetooth → Enable/disable app access as needed.' },
        { title: 'Manage Third-Party App Access', description: 'Settings → General → Privacy → Apple TV Users → Adjust “App User Access” or choose “Reset User Access” to clear app-specific data.' },
        { title: 'Regular Software Updates', description: 'Settings → System → Software Updates.' },
        { title: 'Two-Factor Authentication', description: 'Settings → iCloud → Password & Security → Enable Two-Factor Authentication.' },
      ]
    },
    {
      title: 'Amazon Fire TV',
      subtitle: 'Amazon Fire TV includes multiple options to manage privacy, limit data collection, and improve user control. Check these settings:',
      image: '/firetv.png',
      points: [
        { title: 'Turn Off Device Data Usage', description: 'Settings → Preferences → Privacy Settings → Disable “Device Usage Data”.' },
        { title: 'Turn Off App Usage Data', description: 'Settings → Preferences → Privacy Settings → Disable “App and Over-the-Air Usage Data”.' },
        { title: 'Reset Advertising ID', description: 'Settings → Preferences → Privacy Settings → Advertising ID → Reset Advertising ID.' },
        { title: 'Turn Off Location-Based Services', description: 'Settings → Preferences → Privacy Settings → Disable “Location-Based Services”.' },
        { title: 'Set Up a PIN', description: 'Settings → Preferences → Parental Controls → Change Prime Video PIN.' },
        { title: 'Manage Watch History', description: 'Settings → Preferences → Privacy Settings → View Watch History.' },
        { title: 'Disable Personalized Ads', description: 'Settings → Preferences → Privacy Settings → Turn Off “Interest-Based Ads”.' },
        { title: 'Regular Software Update', description: 'Settings → My Fire TV → About → Check for Updates.' },
      ]
    }
  ]
}
</script>

<template>
  <Template v-bind="data" />
</template>
