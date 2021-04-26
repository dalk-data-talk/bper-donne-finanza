<template>
  <div class="menu-modal">
    <div class="main">
      <div class="close-btn" @click="closeMenu">
        <img :src="'./images/close-button.png'" alt="">
      </div>
       <div class="chapter" v-for="(chapter, c) in content" :key="c" @click="goToChapter('#section-opening-'+(c+1))">{{chapter}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuModal',
  props: ["content"],
  data: function () {
    return {
    }
  },
  mounted() {
  },
  methods: {
    goToChapter(chapter){
      this.$emit('scrollChapter', chapter)
    },
    closeMenu(){
      this.$emit('closeMenu')
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/bper-fonts.scss";
.menu-modal{
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background-color: rgba($bper-grigio-caldo-5, .4);
  padding: 21px;
  .main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: $bper-verde-scuro;
    border-radius: 5px;
    box-shadow: $bper-dropdown-shadow;
    .close-btn{
      position: absolute;
      top: 36px;
      right: 36px;
      width: 32px;
      img{
        width: 100%;
      }
    }
    .chapter{
      position: relative;
      width: 90%;
      @include menu-title;
      border-bottom: 1px solid $bper-verde-chiaro;
      padding: 20px 0px;
    }
  }
}
</style>