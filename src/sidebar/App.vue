<template>
  <div class="root-container">
      <div v-if="isStartView" class="start-container">
          {{ wellcome }}<br>
          <img class="neo-logo" :src="neoLogo" /><br>
          <img class="cy-logo" :src="cyLogo" />
          {{ recorder }}<br>
        <button @click="showSpecView">{{ btnStart }}</button>
      </div>
      <div v-if="isSpecView" class="spec-container">
        <h1> fresh new spec!</h1>
      </div>
  </div>
</template>

<script>
import neoLogo from '../assets/logos/neo-logo.png';
import cyLogo from '../assets/logos/cypress-logo.png';
import setNewRecord from '../records/newRecord.vue';
import allRecordsList from '../records/recordsList.vue';

export default {
  data() {
    return {
      wellcome: 'Welcome to the',
      neoLogo: neoLogo,
      cyLogo: cyLogo,
      recorder: 'recorder!',
      btnStart: 'Start new record!',
      selectedComponent: allRecordsList,
      isStartView : true,
      isSpecView : false
    }
  },
  components: {
    setNewRecord: setNewRecord,
    allRecordsList: allRecordsList
  },
  methods: {
    showSpecView: function () {
      this.isStartView = false;
      this.isSpecView = true;
    }
  }
}
</script>

<style>
  .wellcome-content {
    text-align: center;
  }

  .neo-logo {
    background: red;
    padding: 2px;
    margin-top: 10px;
    height: 30px;
  }

  .cy-logo {
    margin-top: 10px;
    height: 30px;
  }
</style>
