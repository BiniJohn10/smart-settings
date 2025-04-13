<template>
  <section class="blog-section">
    <main class="container cursor-pointer">
      <div class="post-list">
        <article class="post transition-transform duration-500 ease-in-out hover:scale-105" v-for="post in posts" :key="post.id">
          <NuxtLink :to="post.page" class="post-link">
            <img :src="post.image" :alt="post.title" class="post-image" />
            <div class="post-content">
              <h3 class="post-title">{{ post.title }}</h3>
              <p class="post-excerpt">{{ post.excerpt }}</p>
            </div>
          </NuxtLink>
        </article>
      </div>
    </main>
  </section>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: 'Protecting Your Privacy: Understanding the Risks of Data Collected by Smart Home Devices.',
    excerpt: 'As the use of smart home devices continues to grow, it is important to understand the data that these devices collect and how it can be exploited by...',
    image: 'lock.png',
    page:'/protecting',
  },
  {
    id: 2,
    title: 'Smart Hub',
    excerpt: 'A smart hub is a central device that connects and controls various smart home devices...',
    image: 'smart-hub.png',
    page:'/smart-hub',
  },
  {
    id: 3,
    title: 'Smart Streaming devices',
    excerpt: 'Smart streaming devices are devices that allow you to stream movies, TV shows, and other content directly to your TV...',
    image: 'streaming.jpg',
    page:'/smart-streaming',
  },
  {
    id: 4,
    title: 'Smart TVs',
    excerpt: 'Smart TVs are internet-connected televisions that offer a range of features and capabilities, such as streaming services...',
    image: 'smart-tv.png',
    page:'/smart-tv',
  },
  {
    id: 5,
    title: 'Smart Speakers',
    excerpt: 'Smart speakers, such as Amazon Echo, Apple HomePod, Google Nest, and other similar devices, are voice-activated devices...',
    image: 'smart-speakers.png',
    page:'/smart-speaker',
  },

];
</script>

<style scoped>
.blog-section {
  padding: 2rem 0;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.post {
  display: flex;
  flex-direction: row;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
}

.post-link {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: inherit;
}

.post-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
}

.post-content {
  padding: 1rem;
  flex: 1;
}

.post-title {
  margin-top: 0;
  font-size: 1.5rem;
}

.post-excerpt {
  margin: 0.5rem 0;
}

.post-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: #555;
}

@media (max-width: 768px) {
  .post {
    flex-direction: column;
  }

  .post-link {
    flex-direction: column;
  }

  .post-image {
    width: 100%;
    height: auto;
  }
}

</style>
