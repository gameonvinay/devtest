<template>
  <div class="bg-gray-950">
    <Sidebar />
    <div class="bg-gray-950 ml-60">
      <BarChart />
      <div class="task-project-grid">
        <TasksTable />
        <Projects />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.task-project-grid {
  @apply grid ml-4.5 mr-3.5;
  grid-template-columns: 2fr 1fr;
  grid-gap: 16px;
}
</style>
