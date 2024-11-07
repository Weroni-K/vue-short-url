<template>
  <div id="home-section">
    <div class="content">
      <div class="text">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <a href="./">
          <button class="get-started-button">Get Started</button>
        </a>
      </div>
    </div>
    <img
      src="/src/assets/icons/illustration-working.svg"
      alt="Working illustration"
      class="illustration"
    />
  </div>
</template>

<style scoped>
#home-section {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;
}

.content {
  display: flex;
  max-width: 1080px;
  width: 100%;
  padding: 3rem 0;
  margin: 0 auto;
}

.text {
  flex: 1;
  max-width: 50%;
}

.text h1 {
  color: var(--color-neutral-blue);
}

.text p {
  color: var(--color-neutral-grey-violet);
  margin: 8px;
  max-width: 30rem;

  line-height: 1.7;
}

.get-started-button {
  margin-top: 1.2rem;
}

.illustration {
  position: absolute;
  right: -10%;
  top: 0;
  height: 100%;
  width: auto;
  max-width: none;
  object-fit: cover;
  z-index: -1;
}

@media (min-width: 1600px) {
  .illustration {
    right: 0;
  }
}

@media (min-width: 2000px) {
  .illustration {
    right: 10%;
  }
}

@media (max-width: 1140px) {
  #home-section {
    margin-left: 24px;
  }
  .illustration {
    max-height: 400px;
    right: -15%;
  }
}

@media (max-width: 740px) {
  #home-section {
    text-align: center;
    margin-top: -2rem;
    flex-direction: column-reverse;
  }

  .content {
    padding-top: 0;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .text {
    text-align: center;
    padding-top: 2rem;
    max-width: 100%;
    margin-right: 24px;
    padding-inline: 8px;
  }

  .illustration {
    object-fit: cover;
    position: relative;
  }

  #home-section img {
    width: 540px;
    height: auto;
    left: 0;
  }
}
</style>
