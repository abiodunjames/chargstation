<template>
<div>
  <b-media>
    <template v-slot:aside>
      <b-img src="https://res.cloudinary.com/samueljames/image/upload/v1578055094/electric-station.png" width="32" alt="placeholder"></b-img>
    </template>
    <p class="font-weight-bold">{{station.AddressInfo.Title}}</p>
    <p class="font-weight-light small">{{station.AddressInfo.AddressLine1}}, {{station.AddressInfo.Town}}</p>
  </b-media>
  <hr/>
</div>
</template>

<script>
export default {
    props: {
    station: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
 p {
     font-size: 0.9em;
     margin-bottom: 0.3rem;
 }
</style>