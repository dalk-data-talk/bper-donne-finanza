<template>
  <div class="paragraph-container">
    <b-container>
      <b-row v-if="!content.note">
        <b-col lg="8" class="text-container">
          <div class="text" v-html="content.text"></div>
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col sm="12" lg="4" class="note-container">
          <NumericHighlight :content="content.note"/>
        </b-col>
        <b-col lg="6" class="text-container">
          <div class="text" v-html="content.text"></div>
        </b-col>
      </b-row>
    </b-container>
    <div v-if="content.illustration">
      <div v-if="$mq == 'desktop'" :class="['illustration-desktop', {'illustration-left' : content.illustration.position == 'left'}, {'illustration-right' : content.illustration.position == 'right'}]">
        <img :src="'./images/illustrations/desktop/'+content.illustration.name" :style="content.illustration.desktop_tweaks"/>
      </div>
      <div v-if="$mq == 'mobile'" class="illustration-mobile">
        <img v-if="content.illustration.mobile_tweaks" :src="'./images/illustrations/desktop/'+content.illustration.name" :style="content.illustration.mobile_tweaks">
      </div>
      <div v-if="$mq == 'tablet'" class="illustration-mobile">
        <img v-if="content.illustration.tablet_tweaks" :src="'./images/illustrations/desktop/'+content.illustration.name" :style="content.illustration.tablet_tweaks">
      </div>
    </div>
  </div>
</template>

<script>
import NumericHighlight from '../components/NumericHighlight.vue'
export default {
  name: 'Paragraph',
  props: ["content"],
  data() {
    return {
      isLoading: true,
      timeline: null
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
  components: {
    NumericHighlight
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
@import "@/assets/scss/bper-fonts.scss";
@import "@/assets/scss/colors.scss";
.paragraph-container{
  position: relative;
  padding-bottom: 40px;
  .row{
    display: flex;
    justify-content: center;
    .text{
      @include paragraph;
      .bold{
        @include paragraph-bold;
      }
    }
    .source{
      @include numeric-highlight-source;
    }
  }
  .illustration-desktop{
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: row;
    transform: translateY(-280px);
    img{
      width: 350px;
    }
  }
  .illustration-left{
    justify-content: flex-start;
  }
  .illustration-right{
    justify-content: flex-end;
  }
  .illustration-mobile{
    position: absolute;
    right: 0px;
    img{
      position: relative;
      width: 100px;
    }
  }
}
// -- media query tablet
@media only screen 
  and (min-device-width: 450px) 
  and (max-device-width: 1250px) {
}
// -- media query tablet (landscape) + desktop
@media only screen 
  and (min-device-width: 768px) 
  and (orientation: landscape) {
    .paragraph-container{
      .row{
        .numeric-highlight-container{
          .box{
            .title{
            }
            .source{
              text-align: left;
            }
          }
        }
        .text{
          @include paragraph--desktop;
        }
      }
    }
}
</style>
<style lang="scss">
@import "@/assets/scss/bper-fonts.scss";
@import "@/assets/scss/colors.scss";
.paragraph-container{

  .row{
    .text{
      .bold{
        @include paragraph-bold;
      }
      .italic{
            @include paragraph-italic;
          }
      .link{
        @include paragraph-link;
      }
    }
  }
}
@media only screen 
  and (min-device-width: 768px) 
  and (orientation: landscape) {
    .paragraph-container{
      .row{
        .text{
          .bold{
            @include paragraph-bold--desktop;
          }
          .italic{
            @include paragraph-italic--desktop;
          }
          .link{
            @include paragraph-link--desktop;
          }
        }
      }
    }
  }
</style>