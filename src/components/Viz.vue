<template>
  <div>
    <!-- mobile / tablet -->
    <div v-if="$mq != 'desktop'" class="viz-container">
      <b-container>
        <b-row>
          <b-col>
            <div class="title" v-html="content.title"></div>
            <div class="description" v-html="content.description"></div>
            <div class="container-img">
              <img v-for="(img,i) in content.mobile" :key="i" class="img" :src="'./images/'+img"/>
            </div>
            <div class="source" v-html="content.source"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- desktop -->
    <div v-else class="viz-container-desktop">
      <!-- viz type 1 -->
      <div v-if="content.type_desktop == 1" class="type-1">
        <b-container>
          <NoteViz :content="content"/>
          <b-row>
            <b-col :cols="content.desktop_cols">
              <img v-for="(img,i) in content.desktop" :key="i" class="img" :src="'./images/'+img"/>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <!-- viz type 2 -->
      <div v-else class="type-2">
        <b-container>
          <b-row class="row-info">
            <div class="title" v-html="content.title"></div>
            <div class="description" v-html="content.description"></div>
          </b-row>
          <b-row>
            <b-col cols="10">
              <img class="img" :src="'./images/'+content.desktop"/>
            </b-col>
          </b-row>
          <b-row class="row-info">
            <div class="source" v-html="content.source"></div>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>
<script>
import NoteViz from '../components/NoteViz.vue'
export default {
  name: 'Viz',
  props: ["content"],
  components: {
    NoteViz
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
.viz-container{
  position: relative;
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
  .container-img{
    display: flex;
    flex-direction: column;
    align-items: center;
    .img{
      max-width: 300px;
      margin-bottom: 24px;
    }
  }
  .source{
    @include viz-source;
    padding-bottom: 20px;
  }
}
.viz-container-desktop{
  padding-bottom: 64px;
  .type-1{
    .container{
      .row{
        display: flex;
        flex-direction: column;
        align-items: center;
        .img{
          width: 100%;
          margin-top: 160px;
        }
      }
    }
  }
  .type-2{
    position: relative;
    width: 100%;
    background-color: $bper-verde-scuro;
    .container{
      .row{
        display: flex;
        flex-direction: column;
        align-items: center;
        .img{
          width: 100%;
        }
      }
      .row-info{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 40px;
        .title{
          @include viz-full-title;
        }
        .description{
          @include viz-note-description--desktop;
          color: $bper-bianco;
          padding-top: 14px;
          padding-bottom: 14px;
        }
        .source{
          @include numeric-highlight-source;
          padding-top: 14px;
          padding-bottom: 18px;
          color: $bper-bianco;
        }
      }
    }
  }
}
</style>