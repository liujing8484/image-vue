<template>
  <canvas ref="lj_canvas" width="2000" height="2000" class="lj-canvas"></canvas>

</template>

<script>
import {ref} from "vue";
import {get_point_across, get_point_curve, get_point_towers} from "@/api/point";

export default {
  name: "HomeView",
  setup() {
    const lj_canvas = ref();
    get_point_towers().then(res => {
      console.log(res)
    })
    get_point_across().then(res => {
      console.log(res)
    })
    get_point_curve().then(res => {
      console.log(res)
    })
    return {lj_canvas}
  }
}
</script>

<style scoped>

</style>
