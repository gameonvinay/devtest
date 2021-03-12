<template>
  <div class="progress-bar">
    <div class="progress-bar-bar" :class="classname" :style="barStyle"></div>
  </div>
</template>
<script>
export default {
  props: {
    progress: { type: Number, default: 0 },
    classname: {
      type: String,
      default: 'progress-bar-1',
    },
  },
  computed: {
    barStyle() {
      return { width: this.progress * 100 + '%' }
    },
  },
}
</script>
<style lang="scss" scoped>
.progress-bar {
  height: 4px;
  background-color: #ececee;
  width: 46%;
  margin: 38px 16px 38px 16px;
  @media only screen and (min-width: 768px) {
    width: 40%;
  }
}

.progress-bar-bar {
  height: 100%;
  transition: width 0.2s ease-in-out;
}

.progress-bar-1 {
  background-color: #ffbf2f;
}
.progress-bar-2 {
  background-color: #e52b20;
}
.progress-bar-3 {
  background-color: #63ce63;
}
</style>
