<!-- This project is child component of Projects and aceepts props and data.
Also passes props to ProgressBar to show progress bar colors -->
<template>
  <div class="each-project--wrapper">
    <div class="each-project--sub-wrapper">
      <slot name="heading"></slot>
      <slot name="subheading"></slot>
    </div>
    <ProgressBar :progress="progress" :classname="classname" />
  </div>
</template>
<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
    },
    classname: {
      type: String,
      default: 'progress-bar-1',
    },
  },
}
</script>
<style lang="scss" scoped>
.each-project {
  &--wrapper {
    @apply flex justify-between content-center pl-4 border-b-1 border-gray-950 h-20 bg-white;
  }
  &--sub-wrapper {
    @apply text-gray-960 mt-5 mb-4;
  }
  &--heading {
    @apply text-gray-960 leading-6;
  }
  &--subheading {
    @apply text-gray-960 text-sm text-opacity-40 leading-4 mt-1;
  }
}
</style>
