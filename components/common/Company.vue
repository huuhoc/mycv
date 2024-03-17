<script setup lang="ts">
interface COMPANY {
  name: string;
  logo: string;
  position: string;
  website: string;
  timeworked: string;
  detailProject: any;
}
interface Props {
  company: COMPANY;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="p-4 rounded-xl bg-white bg-opacity-10">
    <div class="flex items-center space-x-5">
      <CommonLogoCompany :imageUrl="company.logo" class="w-16 h-16" />
      <div class="w-1/4 space-y-1.5">
        <div>{{ company.name }}</div>
        <div class="font-bold text-lg">{{ company.position }}</div>
        <div>{{ company.timeworked }}</div>
        <div>
          <a :href="company.website" target="_blank" class="text-cyan-400">{{
            company.website
          }}</a>
        </div>
      </div>
      <div class="flex-1 flex flex-col space-y-3">
        <div
          v-for="project in company.detailProject"
          :key="project.name"
          class="space-y-1"
        >
          <div v-if="project.name">{{ project.name }}</div>
          <div v-if="project.desc">{{ project.desc }}</div>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>
