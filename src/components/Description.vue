<template>
  <div class="description-container">
    <div class="description" v-text="content.text"></div>
  </div>
</template>

<script>
export default {
  name: 'Description',
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
.description-container{
  .description{
    @include description;
  }
}
</style>