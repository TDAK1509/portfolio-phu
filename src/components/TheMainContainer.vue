<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TheMainContainer"
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
}
</style>
