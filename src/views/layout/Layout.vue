<template>
  <div class="app-wrapper">
    <div class="main-container">
      <page-head></page-head>
      <app-main/>
      <page-foot></page-foot>
    </div>
  </div>
</template>

<script>
import { AppMain, PageHead, PageFoot } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    PageHead,
    PageFoot
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
