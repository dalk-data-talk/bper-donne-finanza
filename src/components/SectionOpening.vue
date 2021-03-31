<template>
  <div class="section-opening-container">
    <!-- <b-container class="bv-example-row">
      <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container> -->
    <b-container>
      <b-row>
        <b-col>
          <div class="title" v-text="content.title"></div>
          <div class="line"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'SectionOpening',
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
.section-opening-container{
  .title{
    @include section-opening-title;
    text-transform: uppercase;
    padding-bottom: 16px;
  }
  .line{
    width: 100%;
    height: .75px;
    background-color: $bper-verde-scuro;
    margin-bottom: 16px;
  }
}
</style>