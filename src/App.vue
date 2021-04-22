<template>
  <div id="app">
    <Longform/>
  </div>
</template>

<script>
import Longform from './views/Longform.vue'
export default {
  name: 'App',
  components: {
    Longform
  }
}
</script>

<style>
#app {
}
body{
    overflow-x: hidden !important;
}
</style>
