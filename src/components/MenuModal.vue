<template>
  <div class="menu-modal">
    <div class="main">
      <div @click="goToChapter('#section-opening-1')">Capitolo 1</div>
      <div @click="goToChapter('#section-opening-2')">Capitolo 2</div>
      <div @click="goToChapter('#section-opening-3')">Capitolo 3</div>
      <div @click="goToChapter('#section-opening-4')">Capitolo 4</div>
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
  background-color: transparent;
  padding: 21px;
  .main{
    width: 100%;
    height: 100%;
    background-color: $bper-verde-scuro;
  }
}
</style>