import { ref } from 'vue'

const devices = [
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
      },
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
      image: '/apple-speaker.png',
      points: [
      { title: 'Disable Active Listening', description: 'Say: “Hey Siri, stop listening” or go to Home app → Room → HomePod icon → Toggle "Listen for Hey Siri" OFF.' },
      { title: 'Delete Siri History', description: 'Home app → Settings → Siri History → Delete Siri History.' },
      { title: 'Set Up Voice Recognition', description: 'Home app → Tap and hold HomePod → Settings → Siri → Enable "Recognize My Voice" → Follow the prompts.' },
      { title: 'Turn Off Location Services', description: 'Home app → More (…) → Home Settings → Scroll down and disable Location Services for HomePod.' },
      ]
      },
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
      },
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
];

export const useDevices = () => {
    return ref(devices)
}