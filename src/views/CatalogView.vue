<script setup lang="ts">
import { useFetch } from '@vueuse/core';

const URL = 'https://dummyjson.com/products'

const { isFetching, error, data } = useFetch(URL).json()
</script>

<template>
  <div v-if="isFetching">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else>{{ data }}</div>
</template>
