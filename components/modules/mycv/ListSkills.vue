<script setup lang="ts">
const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "Vue",
  "Nuxt",
  "ReactJs",
  "NextJs",
  "Git",
  "Jira",
];
</script>

<template>
  <div class="flex flex-wrap -mx-2">
    <div v-for="skill in skills" :key="skill" class="w-1/2 px-2 py-2">
      <span
        class="block rounded-sm bg-white bg-opacity-10 p-2 text-center w-full"
        >{{ skill }}</span
      >
    </div>
  </div>
</template>
