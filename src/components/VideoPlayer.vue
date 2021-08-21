<template>
  <div class="container">
    <div class="no-data">
      <div class="content">无视频</div>
    </div>

    <video></video>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  color: #fff;
}
.container video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.no-data {
  width: 100%;
  height: 100%;
  position: relative;

  background: #1e1e1e;
}
.no-data .content {
  font-size: 60px;
  width: 400px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -100px;
  color: rgba(255, 255, 255, 0.05);
  font-weight: 700;
  font-family: "microsoft yahei";
}
</style>