<template>
  <section class="cat">
    <button type="button" @click="fetchCat()">고양이 이미지 불러오기</button>
    <br><br>
    <div class="cat-thumbnail">
      <img :src="thumbnail"  alt=""/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// api
import Cat from '@/api/cat';

export default defineComponent({
  name: 'cat',
  data() {
    return {
      thumbnail: '',
    };
  },
  methods: {
    fetchCat() {
      Cat.fetchData()
        .then((response) => {
          if (response.status === 400) {
            console.log(response.status);
          } else if (response.status === 200) {
            this.thumbnail = response.data[0].url;
          }
        })
        .catch((error) => {
          console.log(error);
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
