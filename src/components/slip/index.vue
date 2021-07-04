<template>
  <section class="slip">
    <button type="button" @click="fetchCat()">명언 불러오기</button>
    <br><br>
    <div class="slip-text">
      <h3 v-text="advice"></h3>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// api
import Slip from '@/network/api/slip.ts';

export default defineComponent({
  name: 'slip',
  data() {
    return {
      advice: '',
    };
  },
  methods: {
    fetchCat() {
      Slip.getSlip()
        .then((response) => {
          if (Object.prototype.hasOwnProperty.call(response.data, 'message')) {
            console.log('error');
            console.log(response.status);
          } else {
            this.advice = response.data.slip.advice;
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
  .slip {
    min-width: 100px;
    max-width: 500px;
  }
</style>
