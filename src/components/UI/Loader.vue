<template>
  <div class="wrapper">
    <span class="loader"></span>
  </div>
</template>



<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
}
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid black;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>