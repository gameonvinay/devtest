<!-- This is the parent component of the sidebar navigation on desktop -->
<template>
  <aside class="dashboard--wrapper">
    <NuxtLink to="/">
      <h2 class="dashboard--heading">
        <span><img src="/icons/dashboard-heading.svg" alt="icon" /></span
        ><span>Dashboard UI Kit 2.0</span>
      </h2>
    </NuxtLink>
    <section class="dashboard--section__wrapper">
      <h5 class="dashboard--subheading">MAIN</h5>
      <NuxtLink class="dashboard--links" to="/"
        ><span><img src="/icons/home-icon.svg" alt="icon" /></span
        ><span>Home</span></NuxtLink
      >
      <NuxtLink class="dashboard--links" to="#"
        ><span><img src="/icons/activity-icon.svg" alt="icon" /></span
        ><span>Activity</span></NuxtLink
      >
      <NuxtLink class="dashboard--links" to="#"
        ><span><img src="/icons/projects-icon.svg" alt="icon" /></span
        ><span>Projects</span></NuxtLink
      >
      <NuxtLink class="dashboard--links" to="#"
        ><span><img src="/icons/tasks-icon.svg" alt="icon" /></span
        ><span>Tasks</span></NuxtLink
      >
    </section>
    <section class="dashboard--section__wrapper">
      <h5 class="dashboard--subheading">PEOPLE</h5>
      <NuxtLink class="dashboard--links" to="#"
        ><span><img src="/icons/customers-icon.svg" alt="icon" /></span
        ><span>Customers</span></NuxtLink
      >
      <NuxtLink class="dashboard--links" to="/conversations"
        ><span><img src="/icons/conversations-icon.svg" alt="icon" /></span
        ><span>Conversations</span></NuxtLink
      >
    </section>
    <section class="dashboard--section__wrapper">
      <h5 class="dashboard--subheading">ACCOUNT</h5>
      <NuxtLink class="dashboard--links" to="#"
        ><span><img src="/icons/users-icon.svg" alt="icon" /></span
        ><span>Users</span></NuxtLink
      >
      <NuxtLink class="dashboard--links" to="#"
        ><span><img src="/icons/settings-icon.svg" alt="icon" /></span
        ><span>Settings</span></NuxtLink
      >
    </section>
    <section class="dashboard--section__wrapper">
      <h5 class="dashboard--subheading">MISC</h5>
      <NuxtLink class="dashboard--links" to="#"
        ><span><img src="/icons/empty-state-icon.svg" alt="icon" /></span
        ><span>Empty State</span></NuxtLink
      >
      <NuxtLink class="dashboard--links" to="#"
        ><span><img src="/icons/onboarding-icon.svg" alt="icon" /></span
        ><span>Onboarding</span></NuxtLink
      >
    </section>
  </aside>
</template>

<style lang="scss" scoped>
.dashboard {
  &--wrapper {
    @apply bg-blue-950 hidden lg:block w-60 h-screen static lg:fixed top-0 shadow;
  }
  &--heading {
    @apply text-white text-base leading-8 font-black tracking-steven mx-3 mt-3 mb-2;
    span > img {
      @apply inline-block pl-2 pr-1.5 py-2;
    }
    span:nth-child(2) {
      @apply text-center align-middle;
    }
  }
  &--section__wrapper {
    @apply text-white text-opacity-90 text-sm mx-3 mb-4;
  }
  &--subheading {
    @apply text-white text-opacity-40 text-xs leading-4 ml-2;
  }
  &--links {
    @apply text-white align-middle text-opacity-90 text-sm font-normal leading-4 block px-2 py-1.5;
    span {
      @apply h-9;
    }
    span > img {
      @apply inline-block align-middle mr-1.5;
    }
    span:nth-child(2) {
      @apply text-center align-middle;
    }
  }
}
</style>
