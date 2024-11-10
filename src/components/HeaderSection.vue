<template>
  <div id="header-section">
    <div class="navbar">
      <div class="logo">
        <img
          src="/src/assets/icons/logo.svg"
          alt="Shortly logo"
          class="shortly-logo-footer"
        />
      </div>

      <button
        class="burger"
        @click="toggleMenu"
        aria-label="Toggle menu"
        :class="{ active: isMenuOpen }"
      >
        <span class="line-top"></span>
        <span class="line-mid"></span>
        <span class="line-bottom"></span>
      </button>

      <div
        :class="['navbar-menu', { 'is-active': isMenuOpen }]"
        v-if="isMenuOpen || windowWidth > 560"
      >
        <div class="menu-links">
          <ul>
            <li v-for="(link, index) in menuLinks" :key="index">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <div class="menu-buttons">
          <a href="./">Login</a>
          <a href="./">
            <button class="sign-up-button">Sign Up</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuLinks = ref([
  { text: 'Features', url: './' },
  { text: 'Pricing', url: './' },
  { text: 'Resources', url: './' },
])

const isMenuOpen = ref(false)
const windowWidth = ref(window.innerWidth)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleResize = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value > 740) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  max-width: 1080px;
  margin: auto auto 1rem;
  padding: 3rem 0;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  display: block;
  margin-right: 3rem;
}

.navbar-menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.burger {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  flex-direction: column;
  padding: 1rem;

  span {
    width: 25px;
    height: 3px;
    margin: auto;
    background: var(--color-neutral-grey-violet);
    transition: all 0.4s ease;
  }

  .line-top {
    transform: translateY(-6px);
  }

  .line-bottom {
    transform: translateY(6px);
  }

  &.active {
    .line-top {
      transform: translateY(3px) rotate(45deg);
    }
    .line-mid {
      transform: translateX(-20px) rotate(360deg);
      opacity: 0;
    }
    .line-bottom {
      transform: translateY(-3px) rotate(-45deg);
    }
  }
}

@media (max-width: 1140px) {
  .navbar {
    padding: 2.5rem 1.5rem;
  }
}

@media (max-width: 740px) {
  .navbar-menu {
    display: none;
    position: absolute;
    top: 6.2rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    padding: 0.5rem;
    width: 85%;
    z-index: 10;
    background-color: var(--color-primary-violet);
  }

  .menu-links a,
  .menu-buttons a {
    color: var(--color-neutral-white);
  }
  .menu-links {
    border-bottom: 1px solid var(--color-neutral-grey-violet);
    width: 90%;
    margin-bottom: 1rem;
    ul {
      flex-direction: column;
      padding: 1rem;
      margin: 0;
    }
    li {
      text-align: center;
      margin: 1rem;
    }
    a {
      font-size: 18px;
    }
  }
  .menu-buttons {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    gap: 1.5rem;
    a {
      font-size: 18px;
      margin-inline: 1rem;
    }
  }

  .sign-up-button {
    margin-left: 0;
    padding: 12px 20px;
    width: 100%;
    font-size: 18px;
    margin-bottom: 2rem;
  }

  .navbar-menu.is-active {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .burger {
    display: flex;
    position: absolute;
    right: 10px;
    padding: 1rem;
  }
}
</style>
