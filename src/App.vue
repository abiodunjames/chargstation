<template>
  <b-container fluid class="p-0 m-0">
    <div>
      <Home></Home>
    </div>
  </b-container>
</template>

<script>
import Home from "./pages/HomePage"

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
</style>
