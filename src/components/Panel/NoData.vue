<template>
  <div class="no-data">
    <div class="no-data__content">
      <svg
        class="no-data__icon"
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="#888"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 12H16"
          stroke="#888"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h3 class="no-data__title">Пока нет данных</h3>
      <p class="no-data__description">
        Здесь будет отображаться информация, когда она появится
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.no-data {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  width: 100%;
  padding: 40px;

  &__content {
    text-align: center;
    max-width: 300px;
  }

  &__icon {
    margin-bottom: 20px;
    opacity: 0.6;
  }

  &__title {
    font-size: 1.5rem;
    color: #555;
    margin-bottom: 10px;
    font-weight: 500;
  }

  &__description {
    color: #888;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
  }

  &--small {
    min-height: 200px;
    padding: 20px;

    .no-data__icon {
      width: 48px;
      height: 48px;
    }

    .no-data__title {
      font-size: 1.2rem;
    }
  }

  &--large {
    min-height: 400px;
    padding: 60px;

    .no-data__icon {
      width: 80px;
      height: 80px;
    }

    .no-data__title {
      font-size: 1.8rem;
    }
  }
}
</style>