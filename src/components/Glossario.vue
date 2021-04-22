<template>
  <div class="glossario-container">
    <VoceGlossario v-for="(voce,v) in content.voci" :key="v" :content="voce"/>
  </div>
</template>

<script>
import VoceGlossario from '../components/VoceGlossario.vue'
export default {
  name: 'Glossario',
  components: {
    VoceGlossario
  },
  props: ["content"],
  data: function () {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
@import "@/assets/scss/bper-fonts.scss";
@import "@/assets/scss/colors.scss";
.glossario-container{
  padding-bottom: 24px;
}

// -- media query tablet (landscape) + desktop
@media only screen 
  and (min-device-width: 768px) 
  and (orientation: landscape) {
    .glossario-container{
      position: relative;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 100px 100px;
    }
}
</style>