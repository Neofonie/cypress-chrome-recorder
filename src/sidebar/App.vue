<template>
  <div class="wellcome-content">
    <div>
      {{ wellcome }}<br>
      <img class="neo-logo" :src="neoLogo" /><br>
      <img class="cy-logo" :src="cyLogo" />
      {{ recorder }}<br>
    </div>
    <button @click="selectedComponent = 'setNewRecord'">{{ btnStart }}</button>
    <component :is="selectedComponent">
    </component>
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
      selectedComponent: allRecordsList
    }
  },
  components: {
    setNewRecord: setNewRecord,
    allRecordsList: allRecordsList
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
