import Vuex from "vuex";
import api from "./api";
import Vue from "vue";

const poi = {
  state: {
    stations: [],
    position: {},
    loading: true
  },
  mutations: {
    updateStations: (state, stations) => (state.stations = stations),
    updateLoading: (state, loading) => (state.loading = loading),
    updatePosition: (state, position) => (state.position = position)
  },
  actions: {
    getStations: async (state) => {
        state.commit("updateLoading", true);
        const params = {
            output: "json",
            maxresults: 100,
            compact: true,
            verbose: false
          }
        navigator.geolocation.getCurrentPosition( async (position) => {

        const location = { lat: position.coords.latitude, lng: position.coords.longitude}
            state.commit("updatePosition", location);  
            params.latitude = location.lat;
            params.longitude = location.lng;
            const stations = await api.poi(params);
            state.commit("updateStations", stations.data);
            state.commit("updateLoading", false);
        })

    },
},
  getters: {
    stations: state => {
      return state.stations;
    },
    loading: state => {
      return state.loading;
    },
    position: state => {
        return state.position
    }
  }
};

Vue.use(Vuex);

const store = new Vuex.Store(poi);

export default store;
