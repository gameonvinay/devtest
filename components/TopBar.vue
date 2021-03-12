<!-- This component is parent component and renders the search bar input box with bell icon -->
<template>
  <div class="flex justify-between mr-4 mt-4">
    <div class="relative">
      <input class="search-input" type="search" placeholder="Search..." />
      <img class="search-icon" src="/icons/search-icon.svg" alt="" />
    </div>
    <div class="flex">
      <img class="mr-3" src="/icons/notes-icon.svg" alt="" />
      <img src="/icons/bell-icon.svg" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search-input {
  @apply h-8 w-50 focus:ring-blue-910 focus:outline-none border-0 bg-white text-gray-960 leading-6 shadow;
  input[type='search']:focus {
    @apply outline-none;
  }
  padding-left: 30px;
}
::placeholder {
  color: #110f2466;
  opacity: 1;
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
}
.search-icon {
  @apply absolute;
  top: 8px;
  left: 7px;
}
/* Removed
  the
  X
  button
  from
  search
  bar */
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}
</style>
