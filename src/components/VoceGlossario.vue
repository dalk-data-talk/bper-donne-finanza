<template>
  <div :id="content.id" class="voce-glossario-container">
    <b-container>
      <b-row>
        <b-col class="container">
          <div class="box">
            <div class="title" v-html="content.title"/>
            <div class="description" v-html="content.description"/>
            <div class="links">
              <div v-for="(link,l) in content.links" :key="l">
                <a :href="link.link" target="_blank" v-text="link.label"></a>
              </div>
            </div>
          </div>
          <div class="dot"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  name: 'VoceGlossario',
  props: ["content"],
  data: function () {
    return {
      tl: null
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set("#" + this.content.id + " .container" ,{autoAlpha: 0, x: -50, skewX: -10});
    this.scrollAnimation();
    console.log(this.content.id)
  },
  methods: {
    scrollAnimation() {
      this.tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#" + this.content.id + " .container",
          start: "10% 55%",
          end: "+=0",
          markers: false,
          scrub: false,
          pin: false,
        }
      });
      this.tl.to("#" + this.content.id + " .container", {autoAlpha: 1, x: 0, skewX: 0, ease: "back.out(1.7)", duration: 1})
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
@import "@/assets/scss/bper-fonts.scss";
@import "@/assets/scss/colors.scss";
.voce-glossario-container{
  .container{
    .box{
      background: $bper-bianco;
      box-shadow: $bper-dropdown-shadow;
      border-radius: 2px;
      margin-bottom: 24px;
      padding: 24px 21px;
      .title{
        @include voce-glossario-title;
        text-transform: uppercase;
        padding-bottom: 21px;
      }
    }
    .dot{
      position: absolute;
      top: 0%;
      left: 50%;
      width: 18px;
      height: 18px;
      background-color: $bper-verde-scuro;
      border-radius: 50%;
      transform: translate(-50%,-50%) translateY(-2px);
      box-shadow: $bper-dropdown-shadow;
    }
    .line{
      border:none;
      border-top: 1px dashed $bper-verde-scuro;
      height:1px;
      width:100%;
    }
    .description{
      @include paragraph;
      padding-bottom: 24px;
    }
    .links{
      font-weight: 500;
      color: $bper-verde-scuro !important;
      text-decoration: none;
      @include paragraph;
      a{
        color: $bper-verde-scuro;
      }
    }
  }
}

@media only screen 
  and (min-device-width: 768px) 
  and (orientation: landscape){
    .voce-glossario-container{
      width: calc(100%/2);
      padding-bottom: 56px;
      .container{
        .box{
        }
      }
    }
  }
</style>