<template>
  <div :id="content.id" class="title-container">
    <b-container>
      <b-row>
        <b-col>
          <div class="title" v-html="content.text"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  name: 'Title',
  props: ["content"],
  data: function () {
    return {
      tl: null
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set("#" + this.content.id + " .title" ,{autoAlpha: 0, x: -20, skewX: -20});
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      this.tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#" + this.content.id + " .title",
          start: "55% 55%",
          end: "+=150",
          markers: false,
          scrub: true,
          pin: false,
        }
      });
      this.tl.to("#" + this.content.id + " .title", {x: 0, autoAlpha: 1, skewX: 8, duration: 2, ease: "back.out(1.7)"})
      this.tl.to("#" + this.content.id + " .title", {skewX: 0, duration: .5})
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
@import "@/assets/scss/bper-fonts.scss";
@import "@/assets/scss/colors.scss";
.title-container{
  padding-bottom: 32px;
  .title{
    padding-right: 20px;
    @include title;
  }
  .lightgreen{
    @include title-lightgreen;
  }
}

// -- media query tablet
@media only screen 
  and (min-device-width: 450px) 
  and (max-device-width: 1250px) {

}
// -- media query desktop
@media only screen 
  and (min-device-width: 1250px)
  and (orientation: landscape)  {
    .title-container{
      .title{
        @include title--desktop;
        padding-right: 300px;
      }
      .lightgreen{
        @include title-lightgreen--desktop;
      }
    }
}
</style>
<style lang="scss">
@import "@/assets/scss/bper-fonts.scss";
@import "@/assets/scss/colors.scss";
.title-container{
  .lightgreen{
    @include title-lightgreen;
  }
}
// -- media query desktop
@media only screen 
  and (min-device-width: 1250px)
  and (orientation: landscape)  {
    .title-container{
      .lightgreen{
        @include title-lightgreen--desktop;
      }
    }
}
</style>