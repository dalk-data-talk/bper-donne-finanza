<template>
  <div :id="content.id" class="section-opening-container">
    <b-container>
      <b-row>
        <b-col>
          <div class="title" v-text="content.title"></div>
          <div class="line"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  name: 'SectionOpening',
  props: ["content"],
  data: function () {
    return {
      tl: null
    }
  },
  mounted() {
    gsap.set("#" + this.content.id + " .title" ,{autoAlpha: 0, x: -20});
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      gsap.registerPlugin(ScrollTrigger);
      this.tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#" + this.content.id + " .title",
          start: "55% 55%",
          end: "+=20",
          markers: true,
          scrub: false,
          pin: false,
        }
      });

      this.tl.to("#" + this.content.id + " .title", {x: 0, autoAlpha: 1})
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/bper-fonts.scss";
.section-opening-container{
  .title{
    @include section-opening-title;
    text-transform: uppercase;
    padding-bottom: 16px;
  }
  .line{
    width: 100%;
    height: .75px;
    background-color: $bper-verde-scuro;
    margin-bottom: 16px;
  }
}
</style>