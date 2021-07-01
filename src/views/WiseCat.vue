<template>
  <hr>
  <br>
  <article class="article">
    <section class="section">
      <cat></cat>
    </section>
    <section class="section">
      <slip></slip>
    </section>
  </article>
</template>

<script lang="ts">

// Components
import cat from '@/components/cat/index.vue';
import slip from '@/components/slip/index.vue';

export default {
  components: {
    cat,
    slip,
  },
};
</script>

<style scoped lang="scss">
  .article {
    display: flex;
    justify-content: center;
  }
  .section {
    margin: 0 10px;
  }
</style>
