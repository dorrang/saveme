<template>
  <div class="home">
    <img class="saveme-logo" alt="SaveMe" src="../assets/imgs/logo.png">
    <HelloWorld msg=" "/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
