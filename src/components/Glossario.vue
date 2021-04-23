<template>
  <div class="glossario-container">
    <VoceGlossario v-for="(voce,v) in content.voci" :key="v" :content="voce"/>
    <div class="horizontal-line-1"/>
    <div class="horizontal-line-2"/>
    <div class="vertical-line"></div>
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
  position: relative;
  padding-bottom: 24px;
  height: 100%;
  .horizontal-line-1{
    display: none;
  }
  .vertical-line{
    position: absolute;
    top: 0px;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: transparent;
    border-left: $bper-dash;
    z-index: 0;
  }
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
      .horizontal-line-1{
        position: absolute;
        width: 100%;
        top: 25%;
        left: 0px;
        height: 1px;
        display: block;
        border-top: $bper-dash;
        transform: translateY(-2px);
      }
      .horizontal-line-2{
        position: absolute;
        width: 100%;
        top: calc(65%);
        left: 0px;
        height: 1px;
        display: block;
        border-top: $bper-dash;
      }
    }
}
</style>