<template>
  <div class="custom-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CustomCard"
};
</script>

<style scoped>
.custom-card {
  border-radius: 16px;
  padding: 20px 32px;
  background-color: #011F35;
}
</style>