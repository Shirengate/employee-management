<template>
  <div>
    <table class="panel__dashboard" v-if="employees">
      <thead>
        <tr>
          <th>ID</th>
          <th>ФИО</th>
          <th>Зарплата</th>
          <th>Возраст</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(employee, index) in employees"
          :key="employee.id"
          @dblclick="emit('patchEmp', employee.id)"
        >
          <td>{{ index }}</td>
          <td>{{ employee.employee_name }}</td>
          <td>{{ employee.employee_salary }}</td>
          <td>{{ employee.employee_age }}</td>
          <td>
            <Btn
              :text="'Удалить'"
              class="delete-btn"
              @click="emit('deleteEmp', employee.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <component v-else :is="targetStatus"></component>
  </div>
</template>

<script setup>
import Btn from "@/components/UI/Btn.vue";
import NoData from "@/components/Panel/NoData.vue";
import Loader from "../UI/Loader.vue";

import { ref, computed } from "vue";

const props = defineProps({
  employees: {
    type: [Array, String],
  },
  loading: Boolean,
});
const emit = defineEmits(["patchEmp", "deleteEmp"]);
const targetStatus = computed(() => {
  if (!props.employees && !props.loading) {
    return NoData;
  } else {
    return Loader;
  }
});
</script>

<style lang="scss" scoped>
.panel__dashboard {
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
    font-weight: bold;
    & {
      :nth-child(even) {
        background-color: #f9f9f9;
      }
    }
  }
  tr {
    cursor: pointer;
    &:hover {
      background-color: #f1f1f1;
    }
  }

  td:last-child {
    text-align: center;
  }
}
.delete-btn {
  background-color: #f44336;
}
</style>