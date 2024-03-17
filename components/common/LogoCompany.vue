<script setup lang="ts">
const props = defineProps({
  imageUrl: {
    type: String,
    require: true,
  },
});
</script>
<template>
  <div class="relative thumnail-post p-0.5 bg-white shadow-2xl rounded-md">
    <div class="rounded-sm overflow-hidden">
      <img
        :src="imageUrl"
        alt="Avatar"
        class="max-w-full h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
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
  width: 100%;
  background: #fff;
  transition-property: opacity;
  -o-object-fit: cover;
  object-fit: cover;
}
</style>
