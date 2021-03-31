<template>
  <div class="highlight-container">
    <b-container>
      <b-row>
        <b-col>
          <div class="text" v-text="content.text"></div>
        </b-col>
      </b-row>
    </b-container>
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
@import "@/assets/scss/bper-fonts.scss";
@import "@/assets/scss/colors.scss";
.highlight-container{
  padding-bottom: 32px;
  .text{
    @include highlight;
  }
}
</style>