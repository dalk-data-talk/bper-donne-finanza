<template>
  <div class="loading-page-container">
    <div class="loading-text" v-scroll-lock="true">Caricamento...</div>
    <div class="horizontal-line-container">
      <div class="horizontal-line"></div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'LoadingPage',
  props: ["content"],
  data() {
    return {
      isLoading: true,
      timeline: null
    }
  },
  created() {
  },
  mounted() {
    this.timeline = gsap.timeline({paused: true})
    this.timeline.fromTo(
      '.loading-text',
      {y: -30, opacity: 0},
      {duration: 1, y: 0, opacity: 1}
    )
    this.timeline.fromTo(
      '.horizontal-line',
      {width: "0%"},
      {duration: 5, width: "100%"}
    )
    this.timeline.fromTo(
      '.loading-text',
      {opacity: 1},
      {duration: 1, opacity: 0}
    )
    this.timeline.fromTo(
      '.horizontal-line',
      {opacity: 1},
      {duration: 1, opacity: 0},
      "-=1"
    )
    this.timeline.call(this.endAnimation)
    this.timeline.play()
  },
  methods: {
    endAnimation(){
      this.$emit('finishedLoadingAnimation', true)
    }
  },
  watch: {
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
@import "@/assets/scss/bper-fonts.scss";
@import "@/assets/scss/colors.scss";
.loading-page-container{
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: $bper-verde-scuro;
  .loading-text{
    position: relative;
    color: $bper-bianco;
    @include loading-text;
    padding-bottom: 24px;
  }
  .horizontal-line-container{
    position: relative;
    width: 100%;
    .horizontal-line{
      height: 1px;
      background-color: $bper-verde-chiaro;
    }
  }
}
</style>