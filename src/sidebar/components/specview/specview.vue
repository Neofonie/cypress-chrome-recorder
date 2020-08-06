<template>
  <div>
    <h1>DIES IST EIN TEST!</h1>
    <br />
    <textarea name id cols="30" rows="10" v-model="currentSpec" readonly></textarea>
    <br />
    <button @click="loadSpec">{{ btnDownload }}</button>
  </div>
</template>

<script>
import statics from '../../../helper/statics'

export default {
  data() {
    return {
      btnDownload: 'Download Spec',
      currentSpec: 'placeholder',
    }
  },
  created: function () {
    let _ref = this
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: statics.ACTIONS.SPEC.GET_CURRENT },
        function (response) {
          _ref.currentSpec = response.value
        }
      )
    })
  },
  methods: {
    loadSpec: function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: statics.ACTIONS.DOWNLOAD_SPEC,
        })
      })
    },
  },
}
</script>
