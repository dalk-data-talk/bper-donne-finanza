<template>
  <div class="note-viz-container">
    <b-container>
      <b-row>
        <b-col>
          <div class="box">
            <div class="title" v-html="content.title"></div>
            <div class="description" v-html="content.description"></div>
            <div v-if="content.img_legend" class="img-legend">
              <img :src="'./images/'+content.img_legend" alt="">
            </div>
            <div class="source" v-html="content.source"></div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'NoteViz',
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
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/bper-fonts.scss";
.note-viz-container{
  position: absolute;
  right: 120px;
  z-index: 2;
  .box{
    width: 300px;
    border-radius: 5px;
    box-shadow: $bper-dropdown-shadow;
    padding: 0px 18px;
    background-color: $bper-bianco;
    .title{
      @include numeric-highlight-title;
      text-align: left;
      padding-top: 18px;
      text-transform: uppercase;
    }
    .img-legend{
      position: relative;
      padding-top: 21px;
      padding-bottom: 12px;
      img{
        width: 80%;
      }
    }
    .description{
      @include viz-note-description--desktop;
      padding-top: 14px;
    }
    .source{
      @include numeric-highlight-source;
      padding-top: 14px;
      padding-bottom: 18px;
    }
  }
}
</style>
