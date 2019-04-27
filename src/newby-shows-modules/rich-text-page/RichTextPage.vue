<template>
  <div id="mobileRichTextPage" v-if="loadCompleted">

  </div>
</template>
<script>
export default {
  name: 'RichTextPageHome',
  data () {
    return {}
  },
  beforeCreate () {
  },
  created () {

  },
  methods: {}
}
</script>

<style scoped>
  html, body {
    width: 100%;
  }

  #mobileRichTextPage {
    width: 100%;
    overflow: hidden;
  }

  .rich-text-title {
    font-size: 18px;
    color: #333;
    font-weight: 400;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 14px;
  }

  .invalidate-rich-text {
    text-align: center;
  }
</style>
