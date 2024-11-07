<template>
  <div id="statistics-section">
    <div class="statistics-content">
      <div class="statistics-title">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div class="cards-with-bar">
        <hr class="bar" />
        <div class="statistics-cards">
          <div
            v-for="(card, index) in statisticsCard"
            :key="index"
            class="statistics-card"
          >
            <img
              :src="card.img"
              alt="Statistics image"
              class="statistics-img"
            />
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BrandRecognitionImg from './../assets/icons/icon-brand-recognition.svg'
import DetailedRecordsImg from './../assets/icons/icon-detailed-records.svg'
import FullyCustomizableImg from './../assets/icons/icon-fully-customizable.svg'

const statisticsCard = ref([
  {
    title: 'Brand Recognition',
    description:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    img: BrandRecognitionImg,
  },
  {
    title: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    img: DetailedRecordsImg,
  },
  {
    title: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    img: FullyCustomizableImg,
  },
])
</script>

<style scoped>
#statistics-section {
  max-width: 1080px;
  margin: auto;
  padding: 3rem 0 12rem 0;
}

.statistics-content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 8rem;
  width: 100%;
  justify-items: center;
}

h2,
h3 {
  color: var(--color-neutral-blue);
}

p {
  color: var(--color-neutral-grey-violet);
  margin-top: 1rem;
}

.statistics-title {
  grid-row: 1;
  text-align: center;
  max-width: 540px;
}

.cards-with-bar {
  position: relative;
}

.statistics-cards {
  position: relative;
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.statistics-card {
  background-color: white;
  padding: 6rem 27px 34px;
  width: 100%;
  position: relative;
  top: calc(var(--index) * 2rem);
  text-align: left;
  z-index: 2;
  p {
    font-size: 15px;
  }
  h3 {
    font-size: 22px;
  }
}

.bar {
  position: absolute;
  top: 65%;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: var(--color-primary-cyan);
  border: none;
  z-index: 1;
}

.statistics-card:nth-child(2) {
  top: 3rem;
}

.statistics-card:nth-child(3) {
  top: 5rem;
}

.statistics-img {
  width: 6rem;
  position: absolute;
  padding: 24px;
  opacity: 1;
  top: -3rem;
  left: 27px;
  background-color: var(--color-primary-violet);
  border-radius: 50%;
  margin-bottom: 1.5rem;
}

@media (max-width: 1140px) {
  #statistics-section {
    margin: auto 24px;
  }
}

@media (max-width: 740px) {
  #statistics-section {
    padding-bottom: 9rem;
  }
  .statistics-content {
    gap: 6rem;
  }

  h3 {
    margin-top: 2rem;
  }

  .statistics-title {
    max-width: 380px;
  }

  .statistics-cards {
    grid-template-columns: repeat(1, 1fr);
    gap: 4rem;
    margin-inline: 0;
  }

  .statistics-card {
    padding-top: 3rem;
    text-align: center;
  }

  .bar {
    top: 0;
    left: calc(50% + 8px);
    transform: translateX(-50%);
    width: 8px;
    height: 100%;
  }

  .statistics-card:nth-child(2) {
    top: 2rem;
  }

  .statistics-card:nth-child(3) {
    top: 4rem;
  }

  .statistics-img {
    left: calc(50% - 40px);
  }
  p {
    font-size: 16px;
  }
}
</style>
