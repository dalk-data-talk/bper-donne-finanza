<template>
  <div class="menu-container">
    <!-- menu mobile -->
    <div v-if="$mq != 'desktop'" :class="['menu', {'menu-shown' : menuModalOpen}]">
      <div @click="clickBurger">button</div>
      <transition name="fade">
        <MenuModal v-show="menuModalOpen" v-scroll-lock="menuModalOpen" v-on:scrollChapter="onScrollChapter"/>
      </transition>
    </div>
    <!-- menu desktop v1 -->
    <!-- <div v-else>
      <div class="menu-desktop">
        <div class="element" v-for="(chapter, c) in content" :key="c" @click="goToChapter('#section-opening-'+(c+1))">{{chapter}}</div>
      </div>
    </div> -->
    <div v-else>
      <div class="menu-desktop-v2">
        <div class="chapter" v-for="(chapter, c) in content" :key="c" @click="goToChapter('#section-opening-'+(c+1))">
          <div class="element"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuModal from '../components/MenuModal.vue'
export default {
  name: 'Intro',
  props: ["content"],
  data: function () {
    return {
      menuModalOpen: false,
      cancelScroll: null,
      options: {
        container: 'body',
        easing: 'ease-in-out',
        offset: -60,
        force: true,
        cancelable: true,
        onStart: function() {
          // scrolling started
        },
        onDone: function() {
          // scrolling is done
        },
        onCancel: function() {
          // scrolling has been interrupted
        },
        x: false,
        y: true
      }
    }
  },
  mounted() {
  },
  methods: {
    onScrollChapter(chapter){
      this.goToChapter(chapter)
    },
    goToChapter(chapter){
      this.cancelScroll = this.$scrollTo(chapter, 2000, this.options)
      this.menuModalOpen = false
    },
    clickBurger(){
      this.menuModalOpen = true
    }
  },
  components: {
    MenuModal
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/bper-fonts.scss";
.menu-container{
  margin-bottom: 100px;
}
.menu{
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 60px;
  background-color: $bper-bianco;
  z-index: 9999;
}
.menu-shown{
  z-index: 9999;
}

.menu-desktop{
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  bottom: 50px;
  left: 100px;
  height: 50px;
  border-radius: 5px;
  background-color: $bper-verde-chiaro;
  box-shadow: $bper-dropdown-shadow;
  z-index: 9999;
  padding-left: 40px;
  padding-right: 40px;
  .element{
    @include menu-element--desktop;
    cursor: pointer;
    border-right: 1px solid $bper-bianco;
    padding-left: 24px;
    padding-right: 28px;
  }
  .element:last-child{
    border-right: none;
  }
}

.menu-desktop-v2{
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 32px;
  height: 100vh;
  background-color: white;
  border-right: 1px solid $bper-verde-scuro;
  z-index: 9999;
  .chapter{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .element{
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid $bper-grigio-caldo-5;
      margin-bottom: 12px;
    }
    :hover{
      background-color: $bper-verde-chiaro;
      cursor: pointer;
    }
    .line{
      width: 1px;
      height: 60px;
      background-color: transparent;
      border-right: $bper-dash;
      margin-bottom: 12px;
    }
    &:last-child{
      .line{
        display: none;
      }
    }
  }
}

// --- fade animation
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>