<script setup lang="ts">
defineProps<{
  rating: number
}>()
</script>

<template>
  <span class="text-amber-500">★ {{ rating }}</span>
</template>
