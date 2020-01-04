import themes from "./mapTheme"

const mapSettings = {
  clickableIcons: true,
  streetViewControl: true,
  panControlOptions: true,
  gestureHandling: "cooperative",
  //backgroundColor: COLORS.LANDSCAPE,
  mapTypeControl: true,
  zoomControlOptions: {
    style: "SMALL"
  },
  zoom: 8,
  minZoom: 4,
  maxZoom: 40,
  styles:themes
};

export default mapSettings
