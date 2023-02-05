<template>
  <canvas ref="lj_canvas" width="2000" height="2000" class="lj-canvas"></canvas>

</template>

<script>
import {ref} from "vue";

export default {
  name: "BaseCanvasComponent",
  setup() {
    const lj_canvas = ref();

    return {lj_canvas}
  }
}
</script>

<style scoped>

</style>
