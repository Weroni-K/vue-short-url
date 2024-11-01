<template>
  <div id="boost-section">
    <h2>Boost your links today</h2>
    <a href="./link-shortening">
      <button class="get-started-button">Get Started</button>
    </a>
  </div>
</template>

<script setup></script>

<style scoped>
#boost-section {
  height: 200px;
  background: var(--color-primary-violet)
    url(/src/assets/icons/bg-boost-desktop.svg) no-repeat center / cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
}
</style>
