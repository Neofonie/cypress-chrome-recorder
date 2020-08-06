<template>
  <div>
    {{ wellcome }}<br>
    <img class="neo-logo" :src="neoLogo" /><br>
    <img class="cy-logo" :src="cyLogo" />
    {{ recorder }}<br>
  </div>
</template>

<script>
  import neoLogo from '../../../assets/logos/neo-logo.png';
  import cyLogo from '../../../assets/logos/cypress-logo.png';
  export default {
    data() {
      return {
        wellcome: 'Welcome to the',
        neoLogo: neoLogo,
        cyLogo: cyLogo,
        recorder: 'recorder!'
      }
    }
  }
</script>

<style>
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
