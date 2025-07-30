<template>
  <modal @close="emit('close')" :title="'Удалить сотрудника'">
    <div class="delete">
      <div class="delete__title">
        Вы действительно хотите удалить сотрудника?
      </div>
      <div class="delete__control">
        <button @click="emit('close')" class="cancel-btn">Отмена</button
        ><button class="submit-btn" @click="deleteEmployee">
          <Loader v-if="loading" class="spinner" />
          <span v-else>Подтвердить</span>
        </button>
      </div>
    </div>
  </modal>
</template>

<script setup>
import Modal from "../UI/Modal.vue";
import Loader from "../UI/Loader.vue";
import { useFetchData } from "../../composables/useFetchData";
import { ref } from "vue";

const props = defineProps({
  id: [String, Number],
});
const emit = defineEmits(["close", "updateData"]);

const { deleteData } = useFetchData();
const loading = ref(false);
async function deleteEmployee() {
  loading.value = true;

  try {
    await deleteData(
      `https://dummy.restapiexample.com/api/v1/delete/${props.id},`
    );

    emit("close");
    emit("updateData");
  } catch (error) {
    console.error("Ошибка при удалении данных:", error);
  } finally {
    loading.value = false;
  }
}
</script>

<style lang="scss" scoped>
.delete {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  &__title {
    text-align: center;
    font-size: 18px;
  }
  &__control {
    display: flex;
    justify-content: end;
    gap: 20px;
    .cancel-btn {
      padding: 8px 16px;
      background: #f5f5f5;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
    }

    .submit-btn {
      padding: 8px 16px;
      background: red;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
</style>