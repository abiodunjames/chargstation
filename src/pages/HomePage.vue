<template>
  <div>
    <Layout>
      <template v-slot:nav>
        <Nav />
      </template>

      <template v-slot:map>
        <!-----using key to ensure map is re-rendered when stations changes--->
        <Map :stations="stations" :key="rerender" />
      </template>

      <template v-slot:sidebar>
        <LocationList :stations="stations" />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "../components/layouts/Home";
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
    LocationList
  },
  data() {
    return {
      rerender: 0
    };
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