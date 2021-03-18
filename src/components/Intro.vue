<template>
  <div class="intro-container">
    <div class="title" v-text="content.title"></div>
    <div class="subtitle" v-text="content.subtitle"></div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: ["content"],
  mounted() {
  },
  methods: {
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
@import "@/assets/scss/fonts.scss";
@import "@/assets/scss/colors.scss";
.intro-container{
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title{
    @include intro-title;
    text-align: center;
  }
  .subtitle{
    @include intro-subtitle;
    text-align: center;
  }
}
</style>