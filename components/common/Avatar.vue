<script setup lang="ts">
const props = defineProps({
  imageUrl: {
    type: String,
    require: true,
  },
  type: {
    type: String,
  },
});
const listClass = props.type === "circle" ? "rounded-full" : "rounded-full";
</script>
<template>
  <div
    :class="listClass"
    class="relative thumnail-post p-1 bg-gradient-to-r from-blue-400 to-fuchsia-500 shadow-2xl"
  >
    <div
      :class="type === 'circle' ? 'rounded-full' : ''"
      class="border border-white border-opacity-50"
    >
      <img :src="imageUrl" alt="Avatar" class="max-w-full h-auto" />
    </div>
    <span
      title="OPEN TO WORK"
      class="absolute bottom-[22px] right-[30px] w-3 h-3 rounded-full bg-green-400"
    ></span>
  </div>
</template>

<style scoped>
.thumnail-post div {
  padding-top: 100%;
  position: relative;
  overflow: hidden;
}
.thumnail-post img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  transition-property: opacity;
  -o-object-fit: cover;
  object-fit: cover;
}
</style>
