<!-- This is the Landing Page or Home Page -->
<template>
  <div class="bg-gray-930 lg:ml-60">
    <div class="ml-4">
      <TopBar />
      <!-- Bar with search and bell icon  -->
    </div>
    <BarChart />
    <!-- BarChart Graph which shows 6 months in mobile and 12 in desktop  -->
    <div class="task-project-grid mb-4">
      <TasksTable />
      <!-- Tasks Table on the home page -->
      <Projects />
      <!-- Projects card with progress bars -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.task-project-grid {
  @apply grid ml-4 mr-4;
  grid-gap: 16px;
  @media only screen and (min-width: 600px) {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
