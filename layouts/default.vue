<template>
  <div>
    <div class="responsive-header lg:hidden">
      <MobileHeader />
      <!-- For mobile -->
      <Nuxt />
    </div>
    <div class="web-sidebar hidden lg:block">
      <Sidebar />
      <!-- For Desktop -->
      <Nuxt class="ml-60" />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

html {
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #ececee;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
