<!-- EachTask component renders equals to the number of objects available in the data property -->
<template>
  <div class="all-task-wrapper">
    <div v-for="task in tasks" :key="task.id" class="task--wrapper">
      <input
        class="task--checkbox"
        type="checkbox"
        v-model="task.completed"
        v-bind="task.id"
      />
      <p class="task--text" :class="{ 'task--completed': task.completed }">{{
        task.title
      }}</p>
      <p class="task--date">{{ task.onDate }}</p>
      <p v-if="!task.hasAttachment" class="task--attachment"></p>
      <p
        v-if="task.hasAttachment"
        :class="{ 'task--attachment--have': task.hasAttachment }"
        class="task--attachment"
        ><img id="test" src="/icons/attachment.svg"
      /></p>
      <p
        @click="task.isImportant = !task.isImportant"
        v-if="task.isImportant"
        class="task--importance"
        ><img id="test" src="/icons/checked-important.svg"
      /></p>
      <p
        @click="task.isImportant = !task.isImportant"
        v-if="!task.isImportant"
        class="task--importance"
        ><img id="test" src="/icons/unchecked-important.svg"
      /></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUsed: null,
      newTask: '',
      tasks: [
        {
          id: 1,
          title: 'Send prototype to team',
          onDate: 'Today',
          completed: false,
          hasAttachment: true,
          isImportant: true,
        },
        {
          id: 2,
          title: 'Review content with copywriter',
          onDate: 'Yesterday',
          completed: false,
          hasAttachment: false,
          isImportant: false,
        },
        {
          id: 3,
          title: 'Optimize hero images',
          onDate: '16 July',
          completed: false,
          hasAttachment: true,
          isImportant: false,
        },
        {
          id: 4,
          title: 'Add loading screen after sign up',
          onDate: '14 July',
          completed: false,
          hasAttachment: false,
          isImportant: true,
        },
        {
          id: 5,
          title: 'Get file structure ready for cms',
          onDate: '28 June',
          completed: true,
          hasAttachment: false,
          isImportant: false,
        },
        {
          id: 6,
          title: 'Update style guide with new colors',
          onDate: '25 June',
          completed: true,
          hasAttachment: false,
          isImportant: false,
        },
        {
          id: 7,
          title: 'Define grid for editor',
          onDate: '24 June',
          completed: true,
          hasAttachment: false,
          isImportant: false,
        },
        {
          id: 8,
          title: 'Fix footer on mobile',
          onDate: '24 June',
          completed: true,
          hasAttachment: false,
          isImportant: false,
        },
        {
          id: 9,
          title: 'Mobile navigation not working in ie',
          onDate: '21 June',
          completed: true,
          hasAttachment: false,
          isImportant: false,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.task {
  &--wrapper {
    @apply p-4 place-items-center border-b-1 border-gray-950 bg-white grid;
    grid-template-columns: 1fr 4fr 2fr 1fr 1fr;
    min-height: 80px;
    @media only screen and (min-width: 768px) {
      grid-template-columns: 1fr 16fr 2fr 2fr 2fr;
      min-height: 56px;
    }
  }
  &--checkbox {
    @apply rounded w-6 h-6 border-transparent text-blue-910 bg-gray-930 focus:outline-none focus:ring-0 focus:ring-blue-910 ring-offset-0 hover:border-opacity-0 shadow-minimum justify-self-start;
  }
  &--text {
    @apply mr-4 text-gray-960 leading-6 justify-self-start;
  }
  &--date {
    @apply text-gray-960 text-sm text-opacity-40 leading-6 justify-self-start;
  }
  &--attachment {
    @apply justify-center lg:justify-self-end;
    &--have {
      @apply cursor-pointer;
    }
  }
  &--importance {
    @apply justify-self-end cursor-pointer;
  }
  &--completed {
    @apply line-through text-gray-960 text-opacity-40 leading-6;
  }
}
.all-task-wrapper {
  div:last-child {
    @apply rounded-lg;
  }
}
/* Below CSS is for disabling checkbox tailwindCSS overrides */
input[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='grey' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  @apply text-blue-910;
}
input[type='checkbox']:checked:hover {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}
input[type='checkbox']:checked:focus {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}
input[type='checkbox']:not(:checked):focus {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='transparent' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}
input[type='checkbox']:not(:checked) {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='transparent' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}
input[type='checkbox']:not(:checked):hover {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='transparent' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  @apply bg-blue-910;
}
</style>
