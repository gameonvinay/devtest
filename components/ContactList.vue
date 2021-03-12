<!-- Parent component of the Contact list and New conversation -->
<template>
  <div class="contacts--wrapper">
    <Contacts />
    <NewConversation />
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.contacts {
  &--wrapper {
    @apply w-60 h-screen lg:flex flex-col justify-between hidden fixed bg-white;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(246, 246, 249, 1) 97%
    );
  }
}
</style>
