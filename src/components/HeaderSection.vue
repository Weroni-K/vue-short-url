<template>
  <div id="header-section">
    <div class="navbar">
      <div class="navbar-left">
        <div class="logo">
          <img
            src="/src/assets/icons/logo.svg"
            alt="Shortly logo"
            class="shortly-logo-footer"
          />
        </div>
        <div class="menu-links">
          <ul>
            <li v-for="(link, index) in menuLinks" :key="index">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="menu-buttons">
        <a href="./login">Login</a>
        <a href="./sign-up"><button class="sign-up-button">Sign Up</button></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuLinks = ref([
  { text: 'Features', url: './features' },
  { text: 'Pricing', url: './pricing' },
  { text: 'Resources', url: './resources' },
])
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  max-width: 1080px;
  margin: auto;
  padding: 3rem 0;
  justify-content: space-between;
  align-items: center;
}

.navbar-left {
  display: flex;
  gap: 60px;
  align-items: center;
}

.logo img {
  display: block;
}

.menu-links {
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin-right: 36px;
  }
}

.menu-links a,
.menu-buttons a {
  color: var(--color-neutral-grey-violet);
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;
}

.menu-links a:hover,
.menu-buttons a:hover {
  color: var(--color-neutral-dark-violet);
}

.sign-up-button {
  margin-left: 36px;
  padding: 8px 20px;
  color: var(--color-neutral-white);
  font-size: 16px;
}
</style>
