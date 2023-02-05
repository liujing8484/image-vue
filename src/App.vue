<template>
  <home-view/>
</template>

<script>
import HomeView from "@/views/HomeView";

export default {
  name: 'App',
  components: {
    HomeView
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html, body {
  width: 100%;
  height: 100%;
}
</style>
