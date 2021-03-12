<!-- This component renders the projects card. 
It sends props and slots to EachProject component to render dynamically -->
<template>
  <div class="projects--wrapper">
    <div class="projects--heading__wrapper">
      <span class="projects--heading">Projects</span>
      <button class="btn-plus"
        ><img src="/icons/plus-icon.svg" alt="icon"
      /></button>
    </div>
    <div v-for="project in projects" :key="project.id">
      <EachProject :progress="project.progress" :classname="project.classname">
        <h5 slot="heading" class="each-project--heading">{{
          project.heading
        }}</h5>
        <h6 slot="subheading" class="each-project--subheading">{{
          project.subheading
        }}</h6>
      </EachProject>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          id: '1',
          heading: 'Flowychart Editor',
          subheading: 'Enigm',
          progress: '0.40',
          classname: 'progress-bar-1',
        },
        {
          id: '2',
          heading: 'Landing Page',
          subheading: 'Giddify',
          progress: '0.20',
          classname: 'progress-bar-2',
        },
        {
          id: '3',
          heading: 'Strand App',
          subheading: 'Mondemi',
          progress: '0.70',
          classname: 'progress-bar-3',
        },
        {
          id: '4',
          heading: 'Vinay Dev Test',
          subheading: 'Jesse',
          progress: '0.95',
          classname: 'progress-bar-3',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.projects {
  &--wrapper {
    @apply bg-white rounded-lg shadow;
  }
  &--heading__wrapper {
    @apply flex justify-between items-center bg-gray-920 py-3 pl-4 pr-3 rounded-lg rounded-b-none mb-0.25;
  }
  &--heading {
    @apply text-gray-960 leading-6 text-base font-bold;
  }
}
.btn-plus {
  @apply h-8 w-8 flex-shrink-0 ml-4 rounded bg-gray-930 focus:outline-none;
  &:focus {
    @apply outline-none;
  }
  > img {
    @apply p-2;
  }
}
.each-project {
  &--wrapper {
    @apply flex justify-between content-center pl-4 mb-0.25 h-20 bg-white;
  }
  &--sub-wrapper {
    @apply text-gray-960 mt-5 mb-4;
  }
  &--heading {
    @apply text-gray-960 leading-6;
  }
  &--subheading {
    @apply text-gray-960 text-sm text-opacity-40 leading-4 mt-1;
  }
}
</style>
