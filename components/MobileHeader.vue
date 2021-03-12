<template>
  <div class="w-full bg-blue-950">
    <div class="header--heading">
      <NuxtLink to="/">
        <div class="flex items-center">
          <span class="pl-2 pr-1.5"
            ><img src="/icons/dashboard-heading.svg" alt="icon"
          /></span>
          <span>Dashboard UI Kit 2.0</span>
        </div>
      </NuxtLink>
      <NuxtLink class="flex items-center" to="conversations">
        <span class="pr-2">
          <img src="/icons/hamburger-icon.svg" alt="" />
        </span>
      </NuxtLink>
    </div>
  </div>
</template>
<style>
.header--heading {
  @apply p-2 text-white text-base leading-8 font-black tracking-steven flex h-14 justify-between items-center;
}
</style>
