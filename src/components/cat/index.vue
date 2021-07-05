<template>
  <section class="cat">
    <button type="button" @click="fetchCat()">고양이 이미지 불러오기</button>
    <br><br>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// api
import Cat from '@/network/api/cat.ts';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'cat',
  data() {
    return {
      store: useStore(),
    };
  },
  methods: {
    fetchCat() {
      Cat.getCat()
        .then((response) => {
          if (Object.prototype.hasOwnProperty.call(response.data, 'message')) {
            throw new Error(response.data.message);
          } else if (response.status === 200) {
            this.store.commit('setCatData', response.data[0]);
          }
        })
        .catch((error) => {
          console.log('error:', error);
        });
    },
  },
});
</script>

<style scoped lang="scss">
  .cat {
    min-width: 100px;
    max-width: 500px;
  }
  .cat img {
    max-width: 100%;
  }
</style>
