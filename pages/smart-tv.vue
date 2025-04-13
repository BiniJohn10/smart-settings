<script setup>
import SmartDevicePage from '~/components/Template.vue'

const data = {
  title: 'Smart TV',
  author: 'BiniJohn',
  date: 'May 12, 2023',
  readTime: '1 min read',
  description: 'Smart TVs are internet-connected televisions that offer a range of features and capabilities, such as streaming services, apps, and voice controls. These devices can greatly enhance your viewing experience, but it\'s important to consider privacy and security measures to protect your personal information.',
  mainImage: '/smart-tv.png',
  sections: [
    {
      title: 'Samsung Smart TV',
      subtitle: 'Samsung smart TVs come with various features and settings that can be adjusted to enhance privacy and security. Here are some privacy and security setting setups for Samsung smart TV:',
      image: '/samsungtv.png',
      points: [
        {
          title: 'Regular Software Updates',
          description: `
            <strong>Auto-Update:</strong> Settings → Support → Software Update → Auto Update to enable automatic updates.<br><br>
            <strong>Manual update:</strong> Settings → Support → Software Update → Update Now.
          `
        },
        {
          title: 'Disable Activity Tracking / Turn off ACR data collection',
          description: 'Settings → Support → Terms & Policies → Turn off Viewing Information Services.'
        },
        {
          title: 'Turn off personalized ad tracking',
          description: 'Settings → Support → Terms & Policies → Turn off Internet-based Advertising.'
        },
        {
          title: 'Turn off voice recognition services',
          description: 'Settings → Support → Terms & Policies → Voice Recognition Services.'
        },
        {
          title: 'Set PIN code to prevent unauthorised access',
          description: 'Home → Settings → All settings → General & Privacy → System Manager → Change PIN → Default PIN is "0000" → Set new PIN.'
        },
        {
          title: 'Reset PIN code',
          description: `
            <strong>Option 1 (Smart Remote):</strong> Turn on TV → Volume Up → Return → Volume Down → Return → Volume Up → Return → PIN resets to 0000.<br><br>
            <strong>Option 2 (Standard Remote):</strong> Turn on TV → Mute → Volume Up → Return → Volume Down → Return → Volume Up → Return → PIN resets to 0000.
          `
        },
        {
          title: 'Update Apps on your smart TV',
          description: 'Smart Hub/Home → Menu → Apps → My Apps → Options → Toggle Auto Update to On.'
        },
        {
          title: 'Delete unused apps',
          description: 'Settings → Support → Device Care → Manage Storage. <br> Older models: Apps → Settings → Downloaded Apps or Apps → My Apps → Options → Delete.'
        },
        {
          title: 'Disable Targeted ads on older TVs',
          description: 'Smart Hub → Settings → Support → Terms & Policy → Disable SyncPlus and Marketing. You can also disable Voice Recognition Services here.'
        }
      ]
    },
    {
      title: 'LG Smart TV',
      subtitle: 'LG smart TVs come with various features and settings that can be adjusted to enhance privacy and security. Here are some privacy and security setting setups for LG smart TV:',
      image: '/lgtv.png',
      points: [
        {
          title: 'Disable Activity Tracking (Automatic Content Recognition)',
          description: 'Settings → All Settings → General → LivePlus → Toggle Off.'
        },
        {
          title: 'Limit Personalized Ads',
          description: 'Settings → All Settings → General → About This TV → User Agreements → Toggle Personalized Advertising to Off.'
        },
        {
          title: 'Disable Microphone and Camera',
          description: 'Main menu → Settings → All Settings → General → User Agreements → Disable Voice Information. <br> For physical cameras: Push camera down or unplug external camera.'
        },
        {
          title: 'Regular Firmware Updates',
          description: `
            Settings → All Settings → Support → Software Update → Check for updates → Download and Install → Power OFF for 10s → Power ON.<br><br>
            <strong>Older than WebOS 4.0:</strong> General → About this TV → Check for updates → Same steps as above.
          `
        },
        {
          title: 'Set / Reset PIN code',
          description: 'Home → Settings → 3 dots → Safety → Reset PIN Code → Default is 0000.'
        }
      ]
    },
    {
      title: 'Sony Smart TV',
      subtitle: 'Sony smart TVs also come with various features and settings that can be adjusted to enhance privacy and security. Here are some privacy and security setting setups for Sony smart TV:',
      image: '/sonytv.png',
      points: [
        {
          title: 'Disable Activity Tracking',
          description: `
            Home → Settings → Initial Setup → Sony Bravia policy → Samba TV policy → <strong>Disable</strong> → Confirm disable.
          `
        },
        {
          title: 'Disable all data uploads',
          description: 'Settings → TV About → Legal Information → View Privacy Policy → <strong>Disagree</strong>. <br> Older models: Select “Disable Upload Data”.'
        },
        {
          title: 'Turn on regular software updates',
          description: `
            <strong>Google TV:</strong> Quick Settings → Settings → System → About → System software update → Check auto-update is ON.<br><br>
            <strong>Android TV:</strong> Home → Help → Status & Diagnostics → System software update → Set to ON.<br><br>
            <strong>Other models:</strong> Help/Settings → Customer Support → Software Update → Select Yes/OK.
          `
        },
        {
          title: 'Verify software version',
          description: 'HOME → Settings/Help → Customer support or Product Support → View software version.'
        }
      ]
    }
  ]
}
</script>

<template>
  <Template v-bind="data" />
</template>
