<template>
  <b-row class="col-4 rowoverlay">
    <div class="side-bar">
        <h5>Top Charging Outlets Near Me</h5>
        <hr/>
        <div v-for="station in points" v-bind:key="station.ID">
        <Location :station="station"/>
        </div>
    </div>
  </b-row>
</template>

<script>
import Location from "./Location.vue"

export default {
  name: "LocationList",
  props: {
    stations: {
      type: Array,
      required: true
    }
  },
  components:{
      Location
  },
  computed:{
    points(){
    return this.stations.slice(0,5);
  }
  }
};
</script>
<style scoped>
.side-bar {
  height: auto;
  width: 100%;
  padding: 10px;
  background-color: rgba(255,255,255, 1);
}
</style>