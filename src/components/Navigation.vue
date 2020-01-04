<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#">
        <img src="../assets/logo.png" height="30" class="d-inline-block align-top" alt="Kitten" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav></b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>