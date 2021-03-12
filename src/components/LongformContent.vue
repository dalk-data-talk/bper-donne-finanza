<template>
  <div class="longform-content">
    <div
      v-for="(section, s) in $ml.get('sections')"
      :key="s"
    >
      <component v-bind:is="section.type" :content="section.content"/>
    </div>
  </div>
</template>

<script>
import Intro from '../components/Intro.vue'
import SectionOpening from '../components/SectionOpening.vue'
import Title from '../components/Title.vue'
import Description from '../components/Description.vue'
import Paragraph from '../components/Paragraph.vue'
import Highlight from '../components/Highlight.vue'
import HorizontalSlider from '../components/HorizontalSlider.vue'
import Notes from '../components/Notes.vue'
export default {
  mounted: function() {
  },
  methods: {
  },
  components: {
    Intro,
    SectionOpening,
    Title,
    Description,
    Paragraph,
    Highlight,
    HorizontalSlider,
    Notes
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
@import "@/assets/scss/fonts.scss";
@import "@/assets/scss/colors.scss";
.longform-content{
  background-color: $rose-quartz;
}
</style>