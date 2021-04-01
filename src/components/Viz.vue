<template>
  <div class="viz-container">
    <b-container>
      <b-row>
        <b-col>
          <div class="title" v-html="content.title"></div>
          <div class="description" v-html="content.description"></div>
          <div class="img"></div>
          <div class="source" v-html="content.source"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Viz',
  props: ["content"],
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
.viz-container{
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: $bper-verde-scuro;
  margin-bottom: 40px;
  .title{
    text-transform: uppercase;
    padding-top: 40px;
    padding-bottom: 12px;
    @include viz-title;
  }
  .description{
    padding-right: 100px;
    @include footer-text-element;
    padding-bottom: 24px;
  }
  .img{
    width: 100%;
    background-color: $bper-verde-chiaro;
    margin-bottom: 24px;
  }
  .source{
    @include viz-source;
  }
}
</style>