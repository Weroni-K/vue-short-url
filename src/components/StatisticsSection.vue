<template>
  <div id="statistics-section">
    <div class="statistics-title">
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </div>

    <div class="statistics-cards">
      <div
        v-for="(card, index) in statisticsCard"
        :key="index"
        class="statistics-card"
      >
        <img :src="card.img" alt="Statistics image" class="statistics-img" />
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 4rem;
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

.statistics-cards {
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  position: relative;
}

.statistics-card {
  background-color: white;
  padding: 4rem 27px 34px;
  width: 100%;
  position: relative;
  top: calc(var(--index) * 2rem);
  text-align: center;
  p {
    font-size: 15px;
    text-align: left;
  }
  h3 {
    text-align: left;
    font-size: 22px;
  }
}

.statistics-card:nth-child(2) {
  top: 2rem;
}

.statistics-card:nth-child(3) {
  top: 4rem;
}

.statistics-card::after {
  content: '';
  position: absolute;
  top: 8rem;
  left: 100%;
  width: 2rem;
  height: 8px;
  background-color: var(--color-primary-cyan);
}

.statistics-card:nth-child(2)::after {
  top: 6rem;
}

.statistics-card:nth-child(3)::after {
  display: none;
}

.statistics-img {
  width: 80px;
  position: absolute;
  padding: 20px;
  opacity: 1;
  top: -40px;
  left: 27px;
  background-color: var(--color-primary-violet);
  border-radius: 50%;
  margin-bottom: 1.5rem;
}
</style>
