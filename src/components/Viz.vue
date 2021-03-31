<template>
  <div class="viz-container">
    viz
  </div>
</template>

<script>
export default {
  name: 'Viz',
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
.viz-container{
  
}
</style>