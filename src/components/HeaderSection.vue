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
        <a>Login</a>
        <button>Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuLinks = ref([
  { text: 'Features', url: '/features' },
  { text: 'Pricing', url: '/pricing' },
  { text: 'Resources', url: '/resources' },
])
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  max-width: 1080px;
  margin: auto;
  padding: 48px;
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

.menu-links ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-links li {
  margin-right: 36px;
}

.menu-links a,
.menu-buttons a {
  text-decoration: none;
  color: var(--color-neutral-grey-violet);
  font-weight: 500;
  cursor: pointer;
}

.menu-links a:hover,
.menu-buttons a:hover {
  color: var(--color-neutral-dark-violet);
}

.menu-buttons button {
  margin-left: 36px;
  padding: 10px 20px;
  color: var(--color-neutral-white);
}
</style>
