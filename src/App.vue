<template>
  <div>
    <CustomCard>
      <h1>Title 1</h1>
      <p>Some content for the first box.</p>
    </CustomCard>
  </div>
</template>

<script>
import CustomCard from './components/CustomCard.vue';
import { stockService } from '@/services/stockService';

export default {
  components: {
    CustomCard,
  },
  async created() {
    try {
      this.stockData = await stockService.getStockData();
    } catch (e) {
      this.error = 'Failed to load stock data';
    }
    console.log('loaded data', this.stockData);
    
  }
};
</script>

<style>
body {
  margin: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  display: flex;
  padding: 80px;
  background: radial-gradient(
    71.11% 100% at 50% 0%,
    #020204 14.6%,
    #011f35 100%
  );
}
</style>
