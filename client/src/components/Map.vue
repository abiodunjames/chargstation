<template>
  <b-col cols="12" class="p-0 map">
    <GoogleMapLoader :mapConfig="mapConfig" apiKey="AIzaSyBM1W3h2u6eHshrZfWR-nKGAW2QeAUJEOI">
      <template slot-scope="{ google, map }">
        <GoogleMapMarker
          v-for="marker in markers"
          :key="marker.id"
          :marker="marker"
          :google="google"
          :map="map"
        />
      </template>
    </GoogleMapLoader>
  </b-col>
</template>

<script>
import GoogleMapLoader from "./GoogleMapLoader";
import GoogleMapMarker from "./GoogleMarker";
import mapSettings from "./../constants/mapSettings";
import { mapGetters } from "vuex";

export default {
  components: {
    GoogleMapLoader,
    GoogleMapMarker
  },
  props: {
    stations: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters(["position"]),
    mapConfig() {
      return {
        ...mapSettings,
        center: this.position
      };
    },
    markers() {
      return this.stations.map(item => {
        return {
          id: item.ID,
          title: item.AddressInfo.Title,
          position: {
            lat: item.AddressInfo.Latitude,
            lng: item.AddressInfo.Longitude,
          }
        };
      });
    }
  }
};
</script>
<style scoped>
.map {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
</style>