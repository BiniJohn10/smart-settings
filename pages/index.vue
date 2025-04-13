<template>
  <div class="relative w-full h-[400px] overflow-hidden">
    <img 
      src="/laptop.png" 
      class="w-full h-full object-cover block" 
    />
    <div class="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300"></div>
    <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold tracking-wider transition-all duration-500 hover:scale-105">
      DISCOVER SMARTSETTINGS
    </h1>
  </div>
  <div class="grid grid-cols-3 items-stretch bg-blue-50">
    <div class="col-span-1 relative overflow-hidden">
      <img 
        src="/devices.png" 
        class="w-full h-full object-cover block transition-transform duration-500 hover:scale-105" 
      />
    </div>

    <div class="flex flex-col col-span-2 justify-center p-8 space-y-4">
        <div class="space-y-4 px-4">
          <h2 class="text-2xl font-semibold">Welcome to SmartSettings — I’m so glad you’re here!</h2>

          <p>
            In today’s digital world, privacy and security are more important than ever. My goal is to help you take control of your digital life by showing you how to protect your personal information and optimize your smart device settings with confidence.
          </p>

          <p>
            As you explore the site, you’ll find clear, step-by-step guides on everything from enabling two-factor authentication and creating strong passwords, to managing app permissions and configuring privacy settings — all explained in simple, easy-to-follow language.
          </p>

          <p>
            Your privacy and security are my top priorities. Whether you’re tech-savvy or just getting started, I’m here to support you every step of the way. If you ever have questions or need a bit of extra help, don’t hesitate to reach out.
          </p>

          <p>
            Thank you for visiting, and I hope this becomes your go-to resource for all things privacy and security. Stay empowered — and stay safe online!
          </p>
        </div>
    </div>
  </div>
</template>

<style scoped>
</style>