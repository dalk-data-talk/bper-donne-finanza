<template>
  <div class="longform-content">
    <Menu v-if="$ml.get('menu')" :content="$ml.get('chapters')"/>
    <div
      v-for="(section, s) in $ml.get('sections')"
      :key="s"
    >
      <component v-bind:is="section.type" :content="section.content"/>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import SectionOpening from '../components/SectionOpening.vue'
import Title from '../components/Title.vue'
import Description from '../components/Description.vue'
import Paragraph from '../components/Paragraph.vue'
import Highlight from '../components/Highlight.vue'
import NumericHighlight from '../components/NumericHighlight.vue'
import HorizontalSlider from '../components/HorizontalSlider.vue'
import Notes from '../components/Notes.vue'
import Viz from '../components/Viz.vue'
import ImgStatic from '../components/ImgStatic.vue'
import VoceGlossario from '../components/VoceGlossario.vue'
export default {
  mounted: function() {
  },
  methods: {
  },
  components: {
    Menu,
    SectionOpening,
    Title,
    Description,
    Paragraph,
    Highlight,
    NumericHighlight,
    HorizontalSlider,
    Notes,
    Viz,
    ImgStatic,
    VoceGlossario
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/fonts.scss";
.longform-content{
  background-color: $bper-bianco;
  overflow-x: hidden!important;
  padding-top: 100px;
}
</style>