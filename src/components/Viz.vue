<template>
  <div>
    <!-- mobile / tablet -->
    <div v-if="$mq != 'desktop'" class="viz-container">
      <b-container>
        <b-row>
          <b-col>
            <div class="title" v-html="content.title"></div>
            <div class="description" v-html="content.description"></div>
            <img class="img" :src="'./images/'+content.img"/>
            <div class="source" v-html="content.source"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- desktop -->
    <div v-else class="viz-container-desktop">
      <b-container>
        <b-row>
          <b-col>
            <div class="title" v-html="content.title"></div>
            <div class="description" v-html="content.description"></div>
            <img class="img" :src="'./images/'+content.img"/>
            <div class="source" v-html="content.source"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>
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
    margin-bottom: 24px;
  }
  .source{
    @include viz-source;
    padding-bottom: 20px;
  }
}
.viz-container-desktop{
  position: relative;
  width: 100%;
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
    margin-bottom: 24px;
  }
  .source{
    @include viz-source;
    padding-bottom: 20px;
  }
}
</style>