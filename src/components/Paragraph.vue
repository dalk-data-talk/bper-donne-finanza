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
        <!-- <b-col sm="12" lg="3" class="note-container">
          <div class="note">
            <div class="title">{{content.note.title}}</div>
            <div class="row-data" v-for="(row,r) in content.note.rows" :key="r">
              <div class="row-number">{{row.number}}</div>
              <div class="row-description">{{row.description}}</div>
            </div>
            <div class="source">{{content.note.source}}</div>
          </div>
        </b-col> -->
        <b-col lg="6" class="text-container">
          <div class="text" v-html="content.text"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NumericHighlight from '../components/NumericHighlight.vue'
export default {
  name: 'Paragraph',
  props: ["content"],
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