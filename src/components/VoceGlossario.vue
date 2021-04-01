<template>
  <div class="voce-glossario-container">
    <b-container>
      <b-row>
        <b-col class="container">
          <div class="line"></div>
          <div class="title" v-html="content.title"></div>
          <div class="description" v-html="content.description"></div>
          <div class="links">
            <div v-for="(link,l) in content.links" :key="l">
              <a :href="link.link" target="_blank" v-text="link.label"></a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'VoceGlossario',
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
.voce-glossario-container{
  .container{
    .line{
      border:none;
      border-top: 1px dashed $bper-verde-scuro;
      height:1px;
      width:100%;
    }
    .title{
      @include voce-glossario-title;
      text-transform: uppercase;
    }
    .description{
      @include paragraph;
      padding-bottom: 24px;
    }
    .links{
      font-weight: 500;
      color: $bper-verde-scuro !important;
      text-decoration: none;
      @include paragraph;
      padding-bottom: 40px;
      a{
        color: $bper-verde-scuro;
      }
    }
  }
}
</style>