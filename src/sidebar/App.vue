<template>
  <div class="root-container">
      <div v-if="isStartView" class="start-container">
        <startview></startview>
        <button @click="showSpecView">{{ btnNewSpec }}</button>
      </div>
      <div v-if="isSpecView" class="spec-container">
        <specview></specview>
        <button @click="backToStart">{{ btnBackToStart }}</button>
      </div>
  </div>
</template>

<script>
import startview from './components/startview/startview.vue';
import specview from './components/specview/specview.vue';

export default {
  data() {
    return {
      btnNewSpec: 'Start new record!',
      btnBackToStart: 'Get back to Start!',
      isStartView : true,
      isSpecView : false
    }
  },
  components: {
    startview: startview,
    specview: specview
  },
  methods: {
    backToStart: function () {
      this.isStartView = true;
      this.isSpecView = false;
    },
    showSpecView: function () {
      this.isStartView = false;
      this.isSpecView = true;
    }
  }
}
</script>

<style>
  .start-container,
  .spec-container {
    text-align: center;
  }
</style>
