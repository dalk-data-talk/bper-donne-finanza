<template>
  <div class="example-animation">
    <div class="trigger" style="height: 100vh;">trigger 1</div>
    <div class="trigger-2" style="height: 100vh;">trigger 2
      <div id="ciao" style="position: relative; top: 50%; left: 50%; transform: translate(-50%,-50%); font-size: 40px;">Ciao</div>
    </div>
    <button @click="animate">animate</button>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'ExampleAnimation',
  props: {

  },
  mounted() {
    gsap.fromTo('#ciao', {scrollTrigger: ".trigger", autoAlpha: 0, y: 30},{autoAlpha: 1, y: 0, duration: 1});
  },
  methods: {
    animate(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.example-animation{

}
</style>
