<template>
  <div class="numeric-highlight-container">
    <b-container>
      <b-row>
        <b-col>
          <div class="box">
            <div class="title" v-html="content.title"></div>
            <div class="rows-container">
              <div v-for="(row,r) in content.rows" :key="r" class="single-row">
                <div class="number" v-html="row.number"></div>
                <div class="descriptor" v-html="row.descriptor"></div>
              </div>
              <div class="source" v-html="content.source"></div>
            </div>
          </div>
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
    border-radius: 2px;
    box-shadow: 6px 6px 23px 3px rgba(70, 70, 70, 0.1);
    background-color: $bper-bianco;
    .title{
      @include numeric-highlight-title;
      padding-top: 24px;
      padding-left: 24px;
      padding-right: 24px;
      padding-bottom: 28px;
      text-align: center;
    }
    .rows-container{
      .single-row{
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-bottom: 24px;
        .number{
          @include numeric-highlight-number;
          padding-right: 24px;
        }
        .descriptor{
          @include numeric-highlight-descriptor;
        }
      }
    }
    .source{
      display: flex;
      justify-content: center;
      padding-bottom: 24px;
      @include numeric-highlight-source;
    }
  }
}
</style>
<style lang="scss">
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/bper-fonts.scss";
.numeric-highlight-container {
  .box{
    .rows-container{
      .single-row{
        .number-small{
          @include numeric-highlight-number-small;
        }
      }
    }
  }
}
</style>