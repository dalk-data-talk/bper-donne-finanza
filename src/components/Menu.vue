<template>
  <div class="menu-container">
    <!-- menu mobile -->
    <div v-if="$mq != 'desktop'" :class="['menu', {'menu-shown' : menuModalOpen}]">
      <transition name="fade">
        <MenuModal v-show="menuModalOpen" v-scroll-lock="menuModalOpen"/>
      </transition>
    </div>
    <div v-else>
      desktop
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
      menuModalOpen: true
    }
  },
  mounted() {
  },
  methods: {
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
}
.menu-shown{
  z-index: 9999;
}

// fade animation
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>