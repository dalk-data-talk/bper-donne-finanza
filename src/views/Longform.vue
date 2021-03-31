<template>
  <div class="longform">
    <!-- <LoadingPage v-if="isLoading" v-on:finishedLoadingAnimation="finishedAnimation"/>
    <LongformContent v-else/> -->
    <LongformContent/>
    <!-- esempio bootstrap -->
    <!-- <b-container class="bv-example-row">
      <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container> -->
  </div>
</template>

<script>
import LongformContent from '../components/LongformContent.vue'
export default {
  name: 'Longform',
  props: [],
  components: {
    LongformContent
  },
  data: function () {
    return {
      isLoading: true,
    }
  },
  created() {
  },
  destroyed() {
  },
  mounted() {
  },
  methods: {
    finishedAnimation(){
      this.isLoading = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/scss/fonts.scss";
@import "@/assets/scss/colors.scss";

.longform{
  background-color: $rose-quartz;
  .bv-example-row{
    background-color: black;
  }
}
@media (min-width: 576px) {
  .longform{
    .bv-example-row{
      background-color: red;
    }
  }
}
@media (min-width: 768px) {
  .longform{
    .bv-example-row{
      background-color: orange;
    }
  }
}
@media (min-width: 992px) {
  .longform{
    .bv-example-row{
      background-color: yellow;
    }
  }
}
@media (min-width: 1200px) {
  .longform{
    .bv-example-row{
      background-color: green;
    }
  }
}
</style>
