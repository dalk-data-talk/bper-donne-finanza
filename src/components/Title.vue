<template>
  <div class="title-container">
    <div class="title" v-html="content.text"></div>
  </div>
</template>

<script>
export default {
  name: 'Title',
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
.title-container{
  .title{
    @include title;
  }
}
</style>