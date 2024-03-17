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
    class="flex items-center py-7 border-b border-white border-opacity-20 space-x-10"
  >
    <CommonAvatar imageUrl="/avatar.jpg" type="circle" class="w-52 h-52" />
    <div class="flex-1 space-y-8">
      <div class="flex items-center">
        <div class="w-1/2 space-y-3">
          <div class="font-bold text-3xl">Phạm Hữu Học</div>
          <div>
            <h1
              class="font-bold text-4xl bg-gradient-to-r from-white to-pink-400 inline-block text-transparent bg-clip-text"
            >
              Senior Frontend Dev
            </h1>
          </div>
        </div>

        <div class="w-1/2 text-sm space-y-2">
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
      <div class="text-sm flex items-center space-x-24">
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
