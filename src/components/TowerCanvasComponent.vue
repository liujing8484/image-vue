<template>
  <canvas ref="lj_canvas" class="lj-canvas"></canvas>
  <div>{{ points_tower }}</div>
</template>

<script>
import {onMounted, reactive, ref} from "vue";
// import {DrawTower} from "@/assets/js/DrawTower";
import {get_point_towers} from "@/api/point";

export default {
  name: "TowerCanvasComponent",
  props: ["size"],
  setup(props) {
    const lj_canvas = ref();
    const points_tower = reactive([]);

    onMounted(() => {
          // let ctx = lj_canvas.value.getContext('2d');
          lj_canvas.value.width = props.size.width;
          lj_canvas.value.height = props.size.height;
          // new DrawTower(ctx,towerPoint).render()
        }
    );

    const cal_points = async () => {
      const res = await get_point_towers()
      res.data.forEach(point => {
        points_tower.push(point)
      });
    };
    cal_points();

    return {lj_canvas, points_tower}
  }
}
</script>

<style scoped>
.lj-canvas {
  background: darkgreen;
}
</style>
