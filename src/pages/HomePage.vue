<template>
  <div>
  <Loading v-if="loading"/>
  <Layout v-if="!loading">
    <template v-slot:nav>
      <Nav />
    </template>

    <template v-slot:map>
      <Map :stations="stations" />
    </template>

    <template v-slot:sidebar>
      <LocationList :stations="stations" v-show="false" />
    </template>
  </Layout>
  </div>
</template>

<script>
import Layout from "../components/layouts/Home";
import Loading from "../components/layouts/Loading"
import Map from "../components/Map";
import LocationList from "../components/LocationList";
import Nav from "../components/Navigation";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    Layout,
    Map,
    Nav,
    Loading,
    LocationList
  },
   async mounted() {
    await this.getStations();
  },
  computed: {
    ...mapGetters(["stations", "loading"])
  },

  methods: {
    ...mapActions(["getStations"])
  }
};
</script>
<style scoped>
.rowoverlay {
  position: relative;
  z-index: 10;
  right: 0px;
  float: right;
  margin: 10px;
  clear: both;
  width: 100%;
}
</style>