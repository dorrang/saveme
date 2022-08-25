<template>
  <div class="account-container">
    <img class="saveme-logo" alt="SaveMe" src="../assets/imgs/logo.png" />
    <!-- <HelloWorld msg=" "/> -->
    <nav-bar />
  </div>
</template>

<script>
import navBar from "../components/nav-bar.vue";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: { navBar },
  name: "account",
  //   components: {
  //     HelloWorld
  //   }
};
</script>
