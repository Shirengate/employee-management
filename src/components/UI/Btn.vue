<template>
  <button>{{ text }}</button>
</template>


<script setup>
defineProps({
  text: String,
});
</script>
<style lang="scss" scoped>
button {
  border-radius: 5px;
  border: none;
  padding: 10px 15px;
  color: white;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
}
</style>