<template>
  <el-container class="main-container">
    <el-container>
      <el-container>
        <el-main class="video-container">
          <video-player />
        </el-main>
        <el-footer class="footer" style="height: auto">
          <video-controller />
        </el-footer>
      </el-container>
      <el-aside>
        <video-list />
      </el-aside>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import VideoList from "./components/VideoList.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
import VideoController from "./components/VideoController.vue";
</script>

<style scoped>
.main-container {
  height: 100vh;
}

.footer,
.video-container {
  padding: 0;
}

.video-container {
  background: #000;
}

.dropfile {
  width: 400px;
  height: 300px;
  background: #ccc;
}
</style>
