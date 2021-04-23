<template>
  <div class="longform" style="overflow-x: hidden!important;">
     <transition name="slide-fade">
      <LoadingPage v-if="isLoading" v-on:finishedLoadingAnimation="finishedAnimation"/>
      <LongformContent v-else/>
    </transition>
  </div>
</template>

<script>
import LoadingPage from '../components/LoadingPage.vue'
import LongformContent from '../components/LongformContent.vue'
export default {
  name: 'Longform',
  props: [],
  components: {
    LoadingPage,
    LongformContent
  },
  data: function () {
    return {
      isLoading: this.$ml.get('loading_animation'),
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
@import "@/assets/scss/bper-fonts.scss";
@import "@/assets/scss/colors.scss";
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
