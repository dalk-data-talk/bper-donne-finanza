<template>
  <div class="title-container">
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
</style>
<style lang="scss">
@import "@/assets/scss/bper-fonts.scss";
@import "@/assets/scss/colors.scss";
.title-container{
  .lightgreen{
    @include title-lightgreen;
  }
}
</style>