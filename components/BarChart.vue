<template>
  <div class="barchart--wrapper">
    <div class="barchart--heading__wrapper">
      <span class="barchart--heading">This Month</span>
      <span>
        <Dropdown :options="options" />
      </span>
    </div>
    <div class="chart-container lg:hidden">
      <ChartMobile
        v-if="loaded"
        :chartdata="data"
        :chartoptions="options"
        :height="190"
      />
    </div>
    <div class="chart-container hidden lg:block">
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
      options: ['Sales', 'Purchase', 'Profit'],
      default: 'Sales',
    }
  },
}
</script>
<style lang="scss" scoped>
.barchart {
  &--wrapper {
    @apply m-4 bg-white h-68 rounded-lg shadow;
  }
  &--heading__wrapper {
    @apply flex flex-1 justify-between items-center bg-gray-920 py-4 pl-4 pr-3 rounded-lg rounded-b-none;
  }
  &--heading {
    @apply text-gray-960 leading-6 text-base font-bold;
  }
}
.chart-container {
  @apply relative w-custom p-2 text-opacity-10;
}
</style>
