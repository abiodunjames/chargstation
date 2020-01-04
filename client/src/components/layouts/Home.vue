<template>
  <div>
    <slot name="nav"></slot>
    <b-row class="map-wrapper">
      <slot name="map"></slot>
      <slot name="sidebar"></slot>
    </b-row>
  </div>
</template>
<script>

export default {
  name: "Home"
};
</script>
<style lang="scss" scoped>
.map-wrapper {
  position: relative;
}
</style>