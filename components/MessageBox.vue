<!-- This is the input field UI component on the conversation page which takes input from users 
and option to attach file and add smiley -->
<template>
  <div class="messagebox--wrapper">
    <input class="message-input" type="text" placeholder="Message..." />
    <img class="mx-2 w-6 cursor-pointer" src="/icons/icon-add.svg" />
    <img class="cursor-pointer" src="/icons/icon-face-happy.svg" />
  </div>
</template>
<style lang="scss" scoped>
.messagebox--wrapper {
  @apply flex bg-white p-4 border-t border-gray-930 rounded-b-lg;
}
.message-input {
  @apply h-10 w-full focus:ring-blue-910 focus:outline-none border-gray-930 bg-gray-920 text-gray-960 leading-6;
  input[type='text']:focus {
    @apply outline-none;
  }
}
::placeholder {
  color: #110f2466;
  opacity: 1;
}
</style>
