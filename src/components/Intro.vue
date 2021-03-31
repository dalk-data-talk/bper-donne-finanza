<template>
  <div class="intro-container">
    <b-container>
      <b-row>
        <b-col>
          <div class="title" v-html="content.title"></div>
          <div class="subtitle" v-text="content.subtitle"></div>
        </b-col>
      </b-row>
    </b-container>
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
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/bper-fonts.scss";
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
    padding-bottom: 24px;
  }
  .subtitle{
    @include intro-caption;
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>