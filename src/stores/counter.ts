import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    data: null as any
  }),
  getters: {
    data: (state) => state.data + '1'
  },
  actions: {
    async setUser() {
      // const { data } = await useAxios('https://koreanjson.com/posts/1', AxiosMethod.GET, {});
      // this.data = data;
    }
  }
});
