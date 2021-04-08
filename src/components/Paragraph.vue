<template>
  <div class="paragraph-container">
    <b-container>
      <b-row v-if="!content.note">
        <b-col xl="8" class="text-container">
          <div class="text" v-html="content.text"></div>
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col class="note-container">
          <div class="note">
            <div>{{content.note.title}}</div>
            <div v-for="(row,r) in content.note.rows" :key="r">
              <div>{{row.number}}</div>
              <div>{{row.description}}</div>
            </div>
            <div>{{content.note.source}}</div>
          </div>
        </b-col>
        <b-col class="text-container">
          <div class="text" v-html="content.text"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
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
.paragraph-container{
  padding-bottom: 40px;
  .row{
    display: flex;
    justify-content: center;
    .text{
      @include paragraph;
    }
  }
}
// -- media query tablet
@media only screen 
  and (min-device-width: 450px) 
  and (max-device-width: 1250px) {

}
// -- media query desktop
@media only screen 
  and (min-device-width: 1250px)
  and (orientation: landscape)  {
    .paragraph-container{
      .row{
        .text{
          @include paragraph--desktop;
        }
      }
    }
}
</style>