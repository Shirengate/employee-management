<template>
  <div class="wrapper">
    <div class="panel">
      <Header @add-employee="modalStatuses.add = true" />
      <Dashboard :employees="employees" :loading="loading" />
    </div>
    <Transition>
      <add-modal
        @close="modalStatuses.add = false"
        @update-data="fetchEmployees"
        v-if="modalStatuses.add"
        :title="'Добавить сотрудника'"
      />
    </Transition>
  </div>
</template>

<script setup>
import Header from "@/components/Panel/Header.vue";
import Btn from "@/components/UI/Btn.vue";
import Dashboard from "@/components/Panel/Dashboard.vue";
import AddModal from "./components/Employees/AddModal.vue";

import { onMounted, reactive, ref } from "vue";
import { useFetchData } from "@/composables/useFetchData.js";

const { getData } = useFetchData();
const employees = ref("");
const loading = ref(false);
const modalStatuses = reactive({
  add: false,
  delete: false,
});

async function fetchEmployees() {
  loading.value = true;
  try {
    const data = await getData(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    employees.value = data;
  } catch (e) {
  } finally {
    loading.value = false;
  }
}
onMounted(async () => {
  await fetchEmployees();
});
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 1200px;
  margin: auto;
  width: 100%;
}
.panel {
  padding: 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>