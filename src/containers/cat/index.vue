<template>
  <section class="cat">
    <button type="button" @click="getCatImage()">고양이 이미지 불러오기</button>
    <br><br>
    {{ presenter.item }}
    <br><br>
    <img v-if="presenter.item" :src="presenter.item[0].url">
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Interface Adapter
import Presenter, { IPresenter, IPresenterState } from '@/containers/cat/presenter';
import LoadContainerUseCase, { ILoadContainerUseCase } from '@/containers/cat/LoadContainerUseCase';

import { CatPayload } from '@/entities/Cat';
import ErrorService from '@/services/ErrorService';
import CatRepository from '@/repositories/CatRepository';

export default defineComponent({
  name: 'cat',
  data() {
    return {
      mime_types: 'jpg,png',
    };
  },
  computed: {
    catParams(): CatPayload {
      return {
        mime_types: this.mime_types,
      };
    },
    presenter(): IPresenterState {
      const params: IPresenter = {
        catRepository: new CatRepository(),
      };
      return Presenter(params);
    },
  },
  methods: {
    async getCatImage() {
      const params: ILoadContainerUseCase = {
        catRepository: new CatRepository(),
        request: this.catParams,
        errorService: new ErrorService({ context: 'mounting cat data page' }),
      };

      await new LoadContainerUseCase(params).execute();
    },
  },
  async mounted() {
    const params: ILoadContainerUseCase = {
      catRepository: new CatRepository(),
      request: this.catParams,
      errorService: new ErrorService({ context: 'mounting cat data page' }),
    };

    await new LoadContainerUseCase(params).execute();
  },
});
</script>

<style>
.cat {
  min-width: 100px;
  max-width: 500px;
}
.cat img {
  max-width: 100%;
}
</style>
