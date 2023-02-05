<template>
<!--  <base-canvas-component/>-->
  <tower-canvas-component :size="size"/>
</template>

<script>
import TowerCanvasComponent from "@/components/TowerCanvasComponent";
// import BaseCanvasComponent from "@/components/BaseCanvasComponent";
import {get_min_max_xy} from "@/api/point";
import {reactive} from "vue";

export default {
  name: "SmallSiteComponent",
  components: {
    TowerCanvasComponent,
    // BaseCanvasComponent
  },
  setup() {
    // 第一步：计算canvas的长和宽
    const size = reactive({
      height: document.documentElement.clientHeight,
      width: document.documentElement.clientWidth
    })
    //第2步：通过后端传入的数据计算height和width
    const calSize = async () => {
      const res = await get_min_max_xy();
      const min_y = res.data["minY"];
      const max_y = res.data["maxY"];
      const max_x = res.data["maxX"];
      size.width = max_x > size.width ? max_x : size.width;
      size.height = (max_y - min_y) > size.height ? (max_y - min_y) : size.height;
      // console.log(size.width, size.height)
    }
    calSize()

    return {size, calSize}
  }
}
</script>

<style scoped>

</style>
