<template>
  <div class="scrolltrigger-example">
    <div style="height: 500px;"></div>
    <div class="box"></div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  mounted: function() {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.timeline({
      scrollTrigger: {
        trigger: ".box",
        start: "55% 55%",
        end: "+=100",
        markers: true,
        scrub: false,
        pin: false,
      }
    })
    .to(".box", { x: 500 })
    },
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
.scrolltrigger-example{
  height: 2000px;
  padding-bottom: 500px;
  .box{
    position: relative;
    width: 100px;
    height: 100px;
    background-color: red;
  }
}
</style>