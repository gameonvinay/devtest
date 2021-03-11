<template>
  <div class="tasks--table__wrapper">
    <div class="tasks--heading__wrapper">
      <span class="tasks--heading">Tasks</span>
      <span class="flex justify-between items-center">
        <select>
          <option value="">Sort</option>
          <option value="">Default</option>
        </select>
        <button class="btn-plus"
          ><img src="/icons/plus-icon.svg" alt="icon"
        /></button>
      </span>
    </div>
    <div><EachTask /></div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.tasks {
  &--table__wrapper {
    @apply bg-gray-950 rounded-lg shadow;
  }
  &--heading__wrapper {
    @apply flex justify-between items-center bg-gray-920 py-3 pl-4 pr-3 rounded-lg rounded-b-none mb-0.25;
  }
  &--heading {
    @apply text-gray-960 leading-6 text-base font-bold;
  }
}
.btn-plus {
  @apply h-8 w-8 ml-3 rounded bg-gray-930;
  > img {
    @apply inline-block p-2;
  }
}
</style>
