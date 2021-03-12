<template>
  <div class="flex">
    <ContactList class="shadow" />
    <div class="whole-conversation--wrapper">
      <div class="ml-64">
        <TopBar />
      </div>
      <ConversationWindow class="ml-64 my-4 mr-4 shadow" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.whole-conversation--wrapper {
  @apply flex flex-col rounded-lg;
  flex-basis: 100%;
}
</style>
