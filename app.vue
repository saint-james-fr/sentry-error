<template>
  <div>
    <button @click="triggerError">Trigger Error</button>
  </div>
</template>

<script setup lang="ts">
const triggerError = () => {
  throw new Error("Error triggered");
};
</script>
