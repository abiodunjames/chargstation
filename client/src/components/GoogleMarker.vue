
<script>
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

  mounted() {
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
  render() {
    return this.$slots.default;
  },
  methods: {
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
        content: this.marker.title
      });
      info.open(this.map, marker);
    }
  }
};
</script>