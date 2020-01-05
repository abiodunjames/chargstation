

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    google: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    },
    marker: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(["stations"])
  },
  mounted() {
    this.watchPosition();
    this.addMarker();
  },
  watch: {
    stations: function() {
      this.addMarker();
    }
  },

  render() {
    return this.$slots.default;
  },
  methods: {
    ...mapActions(["getStations"]),
    addMarker() {
      const mapMarker = new this.google.maps.Marker({
        position: this.marker.position,
        marker: this.marker,
        map: this.map,
        title: this.marker.title,
        icon:
          "https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?text=S&size=40&background=15ca70&color=FFF&hoffset=-1"
      });
      mapMarker.addListener("click", () => this.addHandler(mapMarker));
    },
    addHandler(marker) {
      this.zoom(marker);
      this.showTitle(marker);
    },
    zoom(marker) {
      this.map.setZoom(12);
      this.map.setCenter(marker.getPosition());
    },
    showTitle(marker) {
      const info = new this.google.maps.InfoWindow({
        content: this.infoBoxContent(this.marker)
      });
      info.open(this.map, marker);
    },

    watchPosition() {
      navigator.geolocation.watchPosition(() => {
        this.getStations();
      });
    },
    infoBoxContent(marker) {
      return marker.title;
    }
  }
};
</script>