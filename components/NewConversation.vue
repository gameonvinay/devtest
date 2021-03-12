<!-- This is the parent component of the start new chat with a contact from contact list -->
<template>
  <div class="flex justify-between p-3 bg-white">
    <button class="btn-conversation">New Conversation</button>
    <span class="py-1 cursor-pointer">
      <img src="icons/tune-icon.svg" alt="" />
    </span>
  </div>
</template>
<style lang="scss" scoped>
.btn-conversation {
  @apply w-convbtn text-xs font-bold leading-4 px-3 py-2 text-gray-960 bg-gray-930 focus:outline-none;
  &:focus {
    @apply focus:outline-none;
  }
}
</style>
