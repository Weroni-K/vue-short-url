<template>
  <div id="links-section">
    <div class="shorten-link-box">
      <input id="link-input" placeholder="Shorten a link here..." /><button
        id="shorten-it"
      >
        Shorten It!
      </button>
    </div>
    <div class="shortened-links">
      <p>https://twitter.com/s</p>
      <p>https://twitter.com/s</p>
      <button>Copy</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#links-section {
  max-width: 1080px;
  margin: 4rem auto;
  background-color: var(--color-neutral-white);
}

.shorten-link-box {
  background-image: url(./../assets/icons/bg-shorten-desktop.svg);
  max-width: 1080px;
  height: 120px;
  background-color: var(--color-primary-violet);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px;
}

#link-input {
  width: 80%;
  height: 48px;
  border-radius: 8px;
}
.shortened-links {
}
.shortened-links link {
}
#shorten-it {
  border-radius: 8px;
  padding-inline: 28px;
}
</style>
