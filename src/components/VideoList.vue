<template>
  <div class="container">
    <ul class="play-list"></ul>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.container {
  height: 100%;
  background: #333;
}

.play-list li {
  font-size: 14px;
  padding: 4px 10px;
  display: flex;
  color: #fff;
  cursor: normal;
}
.play-list li .name {
  flex: 1;
}

.play-list li.cur {
  background: #222;
  color: #2282f2;
}
</style>