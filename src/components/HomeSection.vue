<template>
  <div id="home-section">
    <div class="content">
      <div class="text">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button class="home-button">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#home-section {
  background: url(/src/assets/icons/illustration-working.svg) right / contain
    no-repeat;
}

h1 {
  color: var(--color-neutral-blue);
}

p {
  color: var(--color-neutral-grey-violet);
}

.content {
  max-width: 1080px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem 0;
}

.home-button {
  margin-top: 2rem;
}
</style>
