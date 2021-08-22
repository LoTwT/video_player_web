<template>
  <div class="container">
    <ul class="play-list">
      <li
        :class="{ cur: videoPath === currentVideoPath }"
        v-for="(videoPath, index) in videoList"
        :key="index"
        @dblclick="setCurrentVido(videoPath)"
      >
        <span class="name">{{ splitVideoName(videoPath) }}</span>
        <span class="time">{{ }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "@/store/index"
import { splitVideoName } from "@/utils/index"

const store = useStore()
const videoList = computed(() => store.videoList)
const currentVideoPath = computed(() => store.currentVideoPath)

const setCurrentVido = (videoPath: string) => store.currentVideoPath = videoPath
</script>

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