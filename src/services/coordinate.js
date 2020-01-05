function geolocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      callback(position);
    });
  } else {
    handleLocationError();
  }
}

function handleLocationError() {
  alert("geolocation is disabled");
}

export default geolocation;