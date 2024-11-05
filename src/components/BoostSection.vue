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
  height: 16rem;
  background: var(--color-primary-violet)
    url(/src/assets/icons/bg-boost-desktop.svg) no-repeat center / cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
}

@media (max-width: 560px) {
  #boost-section {
    height: 300px;
    background-image: url(/src/assets/icons/bg-boost-mobile.svg);
    text-align: center;
    justify-content: center;
    gap: 18px;
    padding: 20px;
  }
  h2 {
    font-size: 28px;
  }
}
</style>
