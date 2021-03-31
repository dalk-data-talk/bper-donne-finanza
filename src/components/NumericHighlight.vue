<template>
  <div class="numeric-highlight-container">
    <b-container>
      <b-row>
        <b-col>
          <div class="box"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'NumericHighlight',
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
.numeric-highlight-container {
  padding-bottom: 40px;
  .box{
    width: 100%;
    height: 320px;
    border-radius: 2px;
    box-shadow: 6px 6px 23px 3px rgba(70, 70, 70, 0.1);
    background-color: $bper-bianco;
  }
}
</style>