<template>
  <div :id="content.id" class="numeric-highlight-container">
    <b-container>
      <b-row>
        <b-col>
          <div class="box">
            <div class="title" v-html="content.title"></div>
            <div class="rows-container">
              <div v-for="(row,r) in content.rows" :key="r" class="single-row">
                <div class="number" v-html="row.number"></div>
                <div class="descriptor" v-html="row.descriptor"></div>
              </div>
              <div class="source" v-html="content.source"></div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  name: 'NumericHighlight',
  props: ["content"],
  data: function () {
    return {
      tl: null
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set("#" + this.content.id + " .single-row .number" ,{autoAlpha: 0, y: 30, skewX: -40});
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      this.tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#" + this.content.id,
          start: "10% 55%",
          end: "+=0",
          markers: false,
          scrub: false,
          pin: false,
        }
      });
      this.tl.to("#" + this.content.id + " .single-row .number", {autoAlpha: 1, y: 0, skewX: 0, duration: 1, ease: "back.out(1.7)", stagger: .3})
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/bper-fonts.scss";
.numeric-highlight-container {
  padding-bottom: 40px;
  .box{
    width: 100%;
    border-radius: 2px;
    box-shadow: 6px 6px 23px 3px rgba(70, 70, 70, 0.1);
    background-color: $bper-bianco;
    .title{
      @include numeric-highlight-title;
      padding-top: 24px;
      padding-left: 24px;
      padding-right: 24px;
      padding-bottom: 28px;
      text-align: center;
    }
    .rows-container{
      .single-row{
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-bottom: 24px;
        .number{
          @include numeric-highlight-number;
          padding-right: 24px;
          text-align: right;
        }
        .descriptor{
          @include numeric-highlight-descriptor;
        }
      }
    }
    .source{
      display: flex;
      justify-content: center;
      padding-bottom: 24px;
      @include numeric-highlight-source;
    }
  }
}
</style>
<style lang="scss">
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/bper-fonts.scss";
.numeric-highlight-container {
  .box{
    .rows-container{
      .single-row{
        .number-small{
          @include numeric-highlight-number-small;
        }
      }
    }
  }
}
</style>