<template>
  <div class="horizontal-slider-container">
    <carousel :per-page="5" :scrollPerPage="false" :paginationEnabled="false" :navigationEnabled="true" :navigationNextLabel="'next'">
      <slide v-for="(slide,s) in content.slides" :key="s">
        <div class="image" v-text="slide.img"></div>
        <div class="title" v-text="slide.title"></div>
        <div class="description" v-text="slide.description"></div>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: 'HorizontalSlider',
  props: ["content"],
  mounted() {
  },
  methods: {
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
@import "@/assets/scss/fonts.scss";
@import "@/assets/scss/colors.scss";
.horizontal-slider-container{
  .title {
    @include slider-element-title;
  }
  .description {
    @include slider-element-description;
  }
}
</style>