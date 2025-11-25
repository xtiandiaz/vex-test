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
  <search class="flex gap-4">
    <input 
      v-model="term" 
      type="text" 
      placeholder="Search..." 
      class="p-4 rounded-4xl bg-slate-100 sm:w-96"
      @keypress.enter="onSubmitOrReset"
    />
    <button 
      type="reset" 
      class="text-sm disabled:opacity-25"
      @click="reset"
    >
      <label>Clear search</label>
    </button>
  </search>
</template>
