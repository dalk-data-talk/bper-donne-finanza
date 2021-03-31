<template>
  <div class="paragraph-container">
    <b-container>
      <b-row>
        <b-col>
          <div class="text" v-html="content.text"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
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
.paragraph-container{
  padding-bottom: 40px;
  .text{
    @include paragraph;
  }
}
</style>