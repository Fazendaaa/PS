<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";

export default defineComponent({
  name: "OpenStreetMapComponent",

  props: {
    address: {
      type: String,
      required: true,
      default: "",
    },
  },

  setup(props) {
    const { address } = toRefs(props);
    const center = ref([40, 40]);
    const projection = ref("EPSG:4326");
    const zoom = ref(18);
    const rotation = ref(0);
    const normalized = address.value.replaceAll(" ", "+");
    const url = `http://nominatim.openstreetmap.org/search?q=${normalized}&format=json&polygon=1&addressdetails=1`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Response not ok");
        }
      })
      .then((data) => {
        const address = data[0];
        center.value = [address["lon"], address["lat"]];
      })
      .catch(console.error);

    return {
      center,
      projection,
      zoom,
      rotation,
    };
  },
});
</script>
