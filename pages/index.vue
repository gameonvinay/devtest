<template>
  <div class="bg-gray-930 lg:ml-60">
    <div class="ml-4">
      <TopBar />
    </div>
    <BarChart />
    <div class="task-project-grid mb-4">
      <TasksTable />
      <Projects />
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
