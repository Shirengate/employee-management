<template>
  <modal @close="emit('close')" :title="'Редактировать сотрудника'">
    <div class="modal-body">
      <form @submit.prevent="patchEmployee">
        <div class="form-group">
          <label for="employee_name">ФИО:</label>
          <input
            type="text"
            id="employee_name"
            placeholder="Введите ФИО сотрудника"
            v-model="employeeInfo.employee_name"
          />
        </div>

        <div class="form-group">
          <label for="employee_salary">Зарплата:</label>
          <input
            type="number"
            id="employee_salary"
            placeholder="Введите зарплату"
            v-model="employeeInfo.employee_salary"
          />
        </div>

        <div class="form-group">
          <label for="employee_age">Возраст:</label>
          <input
            type="number"
            id="employee_age"
            placeholder="Введите возраст"
            v-model="employeeInfo.employee_age"
          />
        </div>

        <div class="form-actions">
          <button type="button" class="cancel-btn" @click="emit('close')">
            Отмена
          </button>
          <button type="submit" class="submit-btn" :disabled="loading">
            <Loader v-if="loading" class="spinner" />
            <span v-else>Сохранить</span>
          </button>
        </div>
      </form>
    </div>
  </modal>
</template>

<script setup>
import Modal from "../UI/Modal.vue";
import Loader from "../UI/Loader.vue";

import { useFetchData } from "@/composables/useFetchData";
import { useValidData } from "@/utils/useValidData.js";
import { reactive, ref, onMounted } from "vue";

const emit = defineEmits(["close", "updateData"]);
const props = defineProps({
  id: [Number, String],
});

const { patchData, getData } = useFetchData();
const { checkValidFields } = useValidData();
const employeeInfo = reactive({
  employee_name: "",
  employee_salary: "",
  employee_age: "",
});
const loading = ref(false);

onMounted(async () => {
  try {
    const data = await getData(
      `https://dummy.restapiexample.com/api/v1/employee/{${props.id}`
    );
    if (data) {
      employeeInfo.employee_name = data.employee_name;
      employeeInfo.employee_salary = data.employee_salary;
      employeeInfo.employee_age = data.employee_age;
      return;
    }
  } catch (e) {
    console.error("Ошибка при получении данных:", error);
  }
});

async function patchEmployee() {
  if (!checkValidFields(employeeInfo)) {
    return alert("Заполните все поля");
  }

  loading.value = true;

  try {
    await patchData(
      `https://dummy.restapiexample.com/api/v1/update/${props.id}`,
      employeeInfo
    );
    emit("close");
    emit("updateData");
  } catch (error) {
    console.error("Ошибка при обновлении данных:", error);
  } finally {
    loading.value = false;
  }
}
</script>

<style lang="scss" scoped>
.modal-body {
  padding: 24px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #444;
}

.form-group input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
}

.cancel-btn {
  padding: 8px 16px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn {
  padding: 8px 16px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>