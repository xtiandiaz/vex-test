<script setup lang="ts">
import { ref } from 'vue';

const term = ref()

const emit = defineEmits<{
  searchBy: [string]
}>()

function reset() {
  term.value = undefined
  onSubmitOrReset()
}

function onSubmitOrReset() {
  emit('searchBy', term.value)
}
</script>

<template>
  <input 
    v-model="term" 
    type="text" 
    placeholder="Search..." 
    @keypress.enter="onSubmitOrReset"
  />
  <button type="reset" :disabled="!term" @click="reset">
    <label>Clear search</label>
  </button>
</template>
