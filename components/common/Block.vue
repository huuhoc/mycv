<script setup lang="ts">
const props = defineProps({
  titleBlock: String,
});
</script>

<template>
  <div>
    <div v-if="titleBlock" class="mb-3.5 uppercase font-medium">
      {{ titleBlock }}
    </div>
    <div class="space-y-5">
      <slot />
    </div>
  </div>
</template>
