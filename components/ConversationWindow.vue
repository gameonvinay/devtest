<template>
  <div class="rounded-lg">
    <NuxtLink to="ContactListMobilePage">
      <div class="contact-list">
        <div class="flex items-center">
          <img
            class="my-0.5 ml-4 mr-2 h-6 w-6 py-0.5 rounded align-middle bg-gray-930"
            src="/profile/profile-03.png"
            alt=""
          />
          <p class="text-blue-950 font-bold leading-6 align-middle"
            >Camilla Tunney</p
          >
        </div>
        <img
          class="justify-self-end mr-4"
          src="/icons/back-arrow-icon.svg"
          alt=""
        />
      </div>
    </NuxtLink>
    <div class="contact-name">
      <p class="text-blue-950 font-bold leading-6 p-4">Camilla Tunney</p>
    </div>
    <div v-for="chat in chats" :key="chat.id" class="conversation-loop">
      <div class="conversation--wrapper">
        <div class="ml-4 mr-2 w-10 h-10">
          <img :src="chat.imgProfile" alt="" />
        </div>
        <div class="mt-2 w-full">
          <span class="text-gray-960 font-bold leading-6">{{
            chat.firstName + ' ' + chat.lastName
          }}</span>
          <span class="text-gray-960 text-opacity-40 leading-6">{{
            chat.time
          }}</span>
          <img
            class="pr-4"
            :class="{ 'hide-msg': !chat.isMessageImg }"
            :src="chat.message"
            alt=""
          />
          <p
            class="text-gray-960 leading-6 pr-4"
            :class="{ 'hide-msg': !chat.isMessageText }"
            >{{ chat.message }}</p
          >
          <div
            class="attachment--wrapper"
            :class="{ 'hide-msg': !chat.isMessageAttachment }"
          >
            <img
              class="mx-4 w-6 h-6 self-center"
              :src="chat.attachIcon"
              alt=""
            />
            <div class="flex flex-col">
              <span class="text-gray-960 leading-6 mb-1">{{
                chat.fileName
              }}</span>
              <span class="text-gray-960 text-sm text-opacity-40 leading-4">{{
                chat.fileType
              }}</span>
            </div>
            <img class="ml-3 self-start" :src="chat.importantIcon" alt="" />
          </div>
        </div>
      </div>
      <div v-if="chat.id === '3'" class="my-12 w-full">
        <p class="divider"
          ><span class="bg-white text-center z-10 px-2">New Messages</span></p
        >
      </div>
    </div>
    <MessageBox />
  </div>
</template>
<script>
export default {
  data() {
    return {
      chats: [
        {
          id: '1',
          firstName: 'Felix',
          lastName: 'Levan',
          time: '11:42',
          imgProfile: '/profile/profile-01.png',
          isMessageText: false,
          isMessageImg: true,
          isMessageAttachment: false,
          message: '/images/bear-image.png',
        },
        {
          id: '2',
          firstName: 'Camilla',
          lastName: 'Tunney',
          time: '11:48',
          imgProfile: '/profile/profile-03.png',
          isMessageText: true,
          isMessageImg: false,
          isMessageAttachment: false,
          message:
            'Hehe, meeting with Manu in a moment. We’ll probably need an hour or so to get this fixed.',
        },
        {
          id: '3',
          firstName: 'Felix',
          lastName: 'Levan',
          time: '11:42',
          imgProfile: '/profile/profile-01.png',
          isMessageText: true,
          isMessageImg: false,
          isMessageAttachment: false,
          message: 'Cool, I’ll let Market know.',
        },
        {
          id: '4',
          firstName: 'Camilla',
          lastName: 'Tunney',
          time: '11:48',
          imgProfile: '/profile/profile-03.png',
          isMessageText: true,
          isMessageImg: false,
          isMessageAttachment: false,
          message:
            'Finally done with Manu. Got the fps to be twice as smooth using the smo function instead. All links are now anchored as well.',
        },
        {
          id: '5',
          firstName: 'Camilla',
          lastName: 'Tunney',
          time: '11:48',
          imgProfile: '/profile/profile-03.png',
          isMessageText: true,
          isMessageImg: false,
          isMessageAttachment: true,
          message: 'Done!',
          attachIcon: '/icons/file-icon.svg',
          fileName: 'landing.zip',
          fileType: 'Zip',
          importantIcon: '/icons/checked-important.svg',
        },
        {
          id: '6',
          firstName: 'Felix',
          lastName: 'Levan',
          time: '11:42',
          imgProfile: '/profile/profile-01.png',
          isMessageText: true,
          isMessageImg: false,
          isMessageAttachment: false,
          message:
            'Looks awesome, thx! I’ll make sure Ernie pushes this asap. Market will be like.. super-duper happy.',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.contact-list {
  @apply lg:hidden flex items-center justify-between bg-white mb-4 py-4 rounded;
  height: 60px;
}
.contact-name {
  @apply bg-gray-920 h-14 rounded-t-lg;
  box-shadow: 0px 1px 0px #ececee;
}
.conversation {
  &--wrapper {
    @apply bg-white flex pb-4;
    &:first-child {
      @apply rounded-t-lg pt-4;
    }
    &:last-child {
      @apply rounded-b-lg;
    }
  }
  &-loop {
    @apply flex flex-col bg-white;
    &:first-child {
      @apply rounded-t-lg;
    }
  }
}
.attachment--wrapper {
  @apply h-20 py-4 mt-2 mr-4 flex border-gray-930 border-1;
  flex-basis: 100%;
}
.hide-msg {
  display: none;
}
.divider {
  @apply border-b-1 text-gray-960 text-opacity-40 text-xs leading-loose text-center;
  line-height: 2px;
}
</style>
