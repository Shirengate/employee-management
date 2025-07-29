<template>
  <div class="panel__header">
    <h1>Учет сотрудников</h1>
    <Btn
      :text="'Добавить'"
      class="panel__header--add-btn"
      @click="$emit('add-employee')"
    />
  </div>
</template>

<script setup>
import Btn from "@/components/UI/Btn.vue";
</script>

<style lang="scss" scoped>
.panel__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &--add-btn {
    background: rgb(4, 168, 4);
    font-size: 20px;
  }
}
</style>