<script setup lang="ts">
const listInfor = [
  {
    icon: "email",
    content: "hocph.212@gmail.com",
  },
  {
    icon: "phone",
    content: "0973.695.650",
  },
  {
    icon: "address",
    content: "Số 10, ngách 241/61 Ngõ Chợ Khâm Thiên, Đống Đa, Hà Nội",
  },
];

const listSocial = [
  {
    name: "facebook",
    icon: "facebook",
    text: "#Phạm Hữu Học",
    url: "https://www.facebook.com/vodanhthuctai",
  },
  {
    name: "linkin",
    icon: "linkin",
    text: "#Phạm Hữu Học",
    url: "https://www.facebook.com/vodanhthuctai",
  },
  {
    name: "telegram",
    icon: "telegram",
    text: "@phamhuuhoc",
    url: "https://t.me/phamhuuhoc",
  },
];
</script>

<template>
  <div
    class="flex flex-col md:flex-row items-center py-7 border-b border-white border-opacity-20 md:space-x-10"
  >
    <CommonAvatar imageUrl="/avatar.jpg" type="circle" class="w-52 h-52" />
    <div class="flex-1 space-y-4 md:space-y-8 mt-4 md:mt-0">
      <div class="flex flex-col md:flex-row md:items-center">
        <div class="md:w-1/2 space-y-3 mb-4 md:mb-0">
          <div class="font-bold text-3xl">Phạm Hữu Học</div>
          <div>
            <h1
              class="font-bold text-4xl bg-gradient-to-r from-white to-pink-400 inline-block text-transparent bg-clip-text"
            >
              Senior Frontend Dev
            </h1>
          </div>
        </div>

        <div class="md:w-1/2 text-sm space-y-2">
          <div
            v-for="item in listInfor"
            :key="item.icon"
            class="flex items-center space-x-3"
          >
            <svg-icon :name="item.icon" class="w-3.5 h-3.5" />
            <span>{{ item.content }}</span>
          </div>
        </div>
      </div>
      <div
        class="text-sm flex flex-col md:flex-row md:items-center md:space-x-24 space-y-2 md:space-y-0"
      >
        <a
          v-for="item in listSocial"
          :href="item.url"
          target="_blank"
          :key="item.icon"
          class="flex items-center space-x-2"
        >
          <svg-icon :name="item.icon" class="w-5 h-5" />
          <span>{{ item.text }}</span>
        </a>
      </div>
    </div>
  </div>
</template>
