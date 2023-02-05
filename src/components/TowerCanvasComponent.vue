<template>
  <canvas ref="lj_canvas" width="2000" height="2000" class="lj-canvas"></canvas>

</template>

<script>
import {ref} from "vue";
import {get_min_max_xy, get_point_towers} from "@/api/point";

export default {
  name: "TowerCanvasComponent",
  setup() {
    const lj_canvas = ref();
    get_point_towers().then(res => {
      console.log(res)
    })
    get_min_max_xy().then(res => {
      console.log(res)
    })
    return {lj_canvas}
  }
}
</script>

<style scoped>

</style>
