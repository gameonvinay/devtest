<template>
  <div class="barchart--wrapper">
    <div class="barchart--heading__wrapper">
      <span class="barchart--heading">This Month</span>
      <select>
        <option>Sales</option>
        <option>Purchase</option>
      </select>
    </div>
    <div class="chart-container">
      <Chart
        v-if="loaded"
        :chartdata="data"
        :chartoptions="options"
        :height="190"
      />
    </div>
  </div>
</template>
<script>
import Chart from './Chart.vue'
export default {
  components: { Chart },
  data() {
    return {
      loaded: true,
      data: this.chartdata,
    }
  },
}
</script>
<style lang="scss" scoped>
.barchart {
  &--wrapper {
    @apply mt-13 ml-4.5 mr-3.5 mb-4 bg-white h-68 rounded-lg shadow;
  }
  &--heading__wrapper {
    @apply flex justify-between items-center bg-gray-920 py-4 pl-4 pr-3 rounded-lg rounded-b-none;
  }
  &--heading {
    @apply text-gray-960 leading-6 text-base font-bold;
  }
}
.chart-container {
  @apply relative w-custom p-2 text-opacity-10;
}
</style>
