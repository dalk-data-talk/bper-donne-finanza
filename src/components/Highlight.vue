<template>
  <div class="highlight-container">
    <div class="text" v-text="content.text"></div>
  </div>
</template>

<script>
export default {
  name: 'Highlight',
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
.highlight-container{
  .text{
    @include highlight;
  }
}
</style>