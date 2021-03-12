<template>
  <div class="section-opening-container">
    <div class="title" v-text="content.title"></div>
  </div>
</template>

<script>
export default {
  name: 'SectionOpening',
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
.section-opening-container{
  .title{
    @include section-opening-title;
    color: $nude-mahogany;
  }
}
</style>