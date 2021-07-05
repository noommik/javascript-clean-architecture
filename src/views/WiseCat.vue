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
  {{ allData }}
  <hr>
  <article class="article">
    <section class="section">
      <button type="button" @click="createImages()">이미지 생성</button>
      <br><br>
      <canvas id="myCanvas"></canvas>
    </section>
  </article>
</template>

<script lang="ts">
// Components
import cat from '@/components/cat/index.vue';
import slip from '@/components/slip/index.vue';
import store from '@/store/index';
import { loadCanvas } from '@/util/createImage.ts';

export default {
  components: {
    cat,
    slip,
  },
  data() {
    return {
      allData: store.getters.getAllData,
    };
  },
  methods: {
    createImages() {
      loadCanvas('myCanvas', store.getters.getAllData.url, store.getters.getAllData.width,
        store.getters.getAllData.height, store.getters.getAllData.advice);
    },
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
