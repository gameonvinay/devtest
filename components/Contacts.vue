<template>
  <div class="m-3">
    <div
      v-for="profile in profiles"
      :key="profile.id"
      class="each-contact--wrapper"
    >
      <img
        class="each-contact--image"
        :src="profile.img"
        alt="profile-picture"
      />
      <p
        class="each-contact--name"
        :class="{ 'each-contact--name--active': profile.isActive }"
        >{{ profile.firstName + ' ' + profile.lastName }}</p
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      profiles: [
        {
          id: '1',
          firstName: 'Camilla',
          lastName: 'Tunney',
          img: '/profile/profile-03.png',
          isActive: false,
        },
        {
          id: '2',
          firstName: 'Alise',
          lastName: 'Stoke',
          img: '/profile/profile-07.png',
          isActive: true,
        },
        {
          id: '3',
          firstName: 'Kristopher',
          lastName: 'Fager',
          img: '/profile/profile-04.png',
          isActive: false,
        },
        {
          id: '4',
          firstName: 'Winston L., Camilla T.,',
          lastName: 'Alise Stoke',
          img: '/profile/profile-03.png',
          isActive: true,
        },
        {
          id: '5',
          firstName: 'Laureen',
          lastName: 'Deangelis',
          img: '/profile/profile-06.png',
          isActive: false,
        },
        {
          id: '6',
          firstName: 'Winston',
          lastName: 'Lanni',
          img: '/profile/profile-05.png',
          isActive: false,
        },
        {
          id: '7',
          firstName: 'Manuel',
          lastName: 'Kriz',
          img: '/profile/profile-02.png',
          isActive: false,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.each-contact {
  &--wrapper {
    @apply bg-transparent flex items-center rounded;
    &:first-child {
      @apply bg-gray-930;
    }
  }
  &--name {
    @apply text-gray-960 text-sm leading-4 whitespace-nowrap overflow-ellipsis overflow-hidden cursor-pointer;
    &--active {
      @apply font-bold;
    }
  }
  &--image {
    @apply bg-gray-930 w-6 h-6 p-0.5 my-1.5 ml-1.5 mr-1 rounded cursor-pointer;
  }
}
</style>
