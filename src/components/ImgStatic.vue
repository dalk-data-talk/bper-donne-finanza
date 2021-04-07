<template>
  <div class="img-static-container">
    <b-container>
      <b-row>
        <b-col class="image-container">
          <img :src="'./images/'+content.img">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ImgStatic',
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
.img-static-container{
  margin-bottom: 40px;
  .image-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 100%;
    }
  }
}
</style>