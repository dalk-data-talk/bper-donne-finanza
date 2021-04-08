<template>
  <div :id="content.id" class="highlight-container">
    <b-container>
      <b-row>
        <b-col>
          <div class="line"/>
          <div data-splitting="words" class="text">{{content.text}}</div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import gsap from 'gsap'
import Splitting from "splitting";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  name: 'Highlight',
  props: ["content"],
  data: function () {
    return {
      tl: null
    }
  },
  mounted() {
    Splitting()
    gsap.registerPlugin(ScrollTrigger);
    gsap.set("#" + this.content.id + " .text .word" ,{autoAlpha: 0, y: 50, skewX: -40});
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      this.tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#" + this.content.id + " .text",
          start: "10% 55%",
          end: "+=0",
          markers: false,
          scrub: false,
          pin: false,
        }
      });
      this.tl.to("#" + this.content.id + " .text .word", {autoAlpha: 1, y: 0, skewX: 0, duration: .8, ease: "back.out(1.7)", stagger: .1})
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
@import "@/assets/scss/bper-fonts.scss";
@import "@/assets/scss/colors.scss";
.highlight-container{
  padding-bottom: 32px;
  .line{
    display: none;
  }
  .text{
    @include highlight;
  }
}
// -- media query desktop
@media only screen 
  and (min-device-width: 1250px)
  and (orientation: landscape)  {
    .highlight-container{
      .line{
        display: block;
        width: 170px;
        height: 1px;
        background-color: $bper-verde-scuro;
        margin-bottom: 24px;
      }
      .text{
        @include highlight--desktop;
        padding-right: 200px;
      }
    }
}
</style>