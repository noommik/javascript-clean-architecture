<template>
  <hr>
  <br>
  <div class="section">
    <cat></cat>
  </div>
</template>

<script lang="ts">

// Components
import cat from '@/components/cat/index.vue';

export default {
  components: {
    cat,
  },
};
</script>

<style scoped lang="scss">
  .section {
    display: flex;
    justify-content: center;
  }
</style>
