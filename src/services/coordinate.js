
export default  navigator.geolocation.getCurrentPosition(position => {
    return {
     lat: position.coords.latitude,
     lng: position.coords.longitude
   }
})
