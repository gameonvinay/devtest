<!-- This list is component which displays only on mobile on ContactListMobilePage  -->
<template>
  <div class="contacts--wrapper">
    <NuxtLink to="conversations">
      <Contacts class="mobile-contacts" />
    </NuxtLink>
    <NewConversation />
    <!-- UI for starting a new conversation -->
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.contacts {
  &--wrapper {
    @apply w-full h-full lg:hidden flex flex-col justify-between bg-white;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(246, 246, 249, 1) 97%
    );
  }
}
.mobile-contacts {
  height: calc(100vh - 140px);
}
</style>
