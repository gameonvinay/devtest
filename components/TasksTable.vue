<!-- This component renders Heading of the Tasks with dropdown and add button.
 Also renders Eachtask component -->
<template>
  <div class="tasks--table__wrapper">
    <div class="tasks--heading__wrapper">
      <span class="tasks--heading">Tasks</span>
      <span class="flex justify-between items-center">
        <Dropdown v-bind:options="options" />
        <!-- dropdown accepts props from data options to render -->
        <button class="btn-plus"
          ><img src="/icons/plus-icon.svg" alt="icon"
        /></button>
      </span>
    </div>
    <div><EachTask /></div>
    <!-- This will render according to the task numbers available -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: ['Sort', 'Alphabet', 'Date'],
      default: 'Sort',
    }
  },
}
</script>
<style lang="scss" scoped>
.tasks {
  &--table__wrapper {
    @apply bg-white rounded-lg shadow;
  }
  &--heading__wrapper {
    @apply flex justify-between items-center bg-gray-920 py-3 pl-4 pr-3 rounded-lg rounded-b-none border-b-1 border-gray-950;
  }
  &--heading {
    @apply text-gray-960 leading-6 text-base font-bold;
  }
}
.btn-plus {
  @apply h-8 w-8 flex-shrink-0 ml-4 rounded bg-gray-930 focus:outline-none;
  &:focus {
    @apply outline-none;
  }
  > img {
    @apply p-2;
  }
}
</style>
