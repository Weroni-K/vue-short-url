<template>
  <div id="footer-section">
    <div class="logo">
      <img
        src="/src/assets/icons/logo.svg"
        alt="Shortly logo"
        class="shortly-logo-footer"
      />
    </div>

    <div class="info-links-grid">
      <div
        v-for="(column, titleIndex) in footerColumns"
        :key="titleIndex"
        class="info-links-column"
      >
        <h3>{{ column.title }}</h3>
        <ul>
          <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
            <a :href="link.url">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="social-links">
      <a
        v-for="(social, socialIndex) in socialLinks"
        :key="socialIndex"
        :href="social.url"
        class="social-link"
        target="_blank"
      >
        <img :src="social.logo" alt="Social media logo" class="social-icon" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FacebookIcon from './../assets/icons/icon-facebook.svg'
import TwitterIcon from './../assets/icons/icon-twitter.svg'
import PinterestIcon from './../assets/icons/icon-pinterest.svg'
import InstagramIcon from './../assets/icons/icon-instagram.svg'

const footerColumns = ref([
  {
    title: 'Features',
    links: [
      { text: 'Link Shortening', url: './link-shortening' },
      { text: 'Branded Links', url: './branded-links' },
      { text: 'Analytics', url: './analytics' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { text: 'Blog', url: './blog' },
      { text: 'Developers', url: 'https://github.com/Weroni-K' },
      { text: 'Support', url: './support' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About', url: './about' },
      { text: 'Our Team', url: './our-team' },
      { text: 'Careers', url: './careers' },
      { text: 'Contact', url: './contact' },
    ],
  },
])

const socialLinks = ref([
  { logo: FacebookIcon, url: 'https://facebook.com' },
  { logo: TwitterIcon, url: 'https://twitter.com' },
  { logo: PinterestIcon, url: 'https://pinterest.com' },
  { logo: InstagramIcon, url: 'https://instagram.com' },
])
</script>

<style scoped>
#footer-section {
  background-color: var(--color-neutral-dark-violet);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 60px 120px;
  gap: 100px;
}

.shortly-logo-footer {
  filter: invert(80%) sepia(100%) saturate(350%) hue-rotate(160deg)
    brightness(280%);
}

.info-links-grid {
  display: grid;
  grid-template-columns: repeat(3, 128px);
  gap: 60px;
}

.info-links-column {
  h3 {
    margin-bottom: 24px;
    font-size: 18px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 5px;
  }
  a {
    color: var(--color-neutral-grey);
  }
  a:hover {
    color: var(--color-primary-cyan);
  }
}

.social-links {
  display: flex;
  flex-direction: row;
  gap: 24px;
}

.social-icon {
  width: 24px;
  height: 24px;
}

.social-link:hover .social-icon {
  filter: invert(80%) sepia(100%) saturate(350%) hue-rotate(160deg)
    brightness(280%);
}

/* @media (max-width: 720px) {
  .info-links-grid {
    grid-template-columns: 1fr;
  }
  .social-links {
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
  }
} */
</style>
