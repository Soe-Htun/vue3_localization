<script setup>
import { ref } from 'vue'
import Home from './views/Home.vue'
import { setLanguage } from './i18n/index';
const selectedLanguage = ref('en');
const changeLanguage = () => {
  setLanguage(selectedLanguage.value);
};
</script>

<template>
  <main>
    <select v-model="selectedLanguage" @change="changeLanguage">
      <option value="en">English</option>
      <option value="zh">中文</option>
    </select>
    Change: {{ $t('title') }}
    <Home />
  </main>
</template>



<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
