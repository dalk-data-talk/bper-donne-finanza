<template>
  <div class="menu-modal">
    <div class="main"></div>
  </div>
</template>

<script>
export default {
  name: 'MenuModal',
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