<template>
  <main>
    <HeaderSection />
    <HomeSection />
    <div id="grey-background-section">
      <LinksSection />
      <StatisticsSection />
    </div>
    <BoostSection />
    <FooterSection />
  </main>
</template>

<script setup>
import HeaderSection from './components/HeaderSection.vue'
import HomeSection from './components/HomeSection.vue'
import LinksSection from './components/LinksSection.vue'
import StatisticsSection from './components/StatisticsSection.vue'
import BoostSection from './components/BoostSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style scoped></style>
