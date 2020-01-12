<template>
  <b-container>
    <b-row>
      <b-col align-self="center">
        <div class="loader">
          <b-spinner variant="success" label="Spinning"></b-spinner>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "Spinner"
};
</script>

<style scoped>
.loader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: -webkit-translate(-50%, -50%);
    transform: -moz-translate(-50%, -50%);
    transform: -ms-translate(-50%, -50%);
}
</style>