<template>
  <div class="container">
    <div v-if="!currentVideoPath" class="no-data">
      <div class="content">无视频</div>
    </div>

    <video ref="video" @timeupdate="handleTimeUpdate" @durationchange="handleDurationChange"></video>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { PlayState, useStore } from "@/store/index";

const store = useStore();
const currentVideoPath = computed(() => store.currentVideoPath);

const video = ref<HTMLVideoElement | null>(null);

watch(currentVideoPath, () => {
  const videoEl = video.value!
  if (currentVideoPath.value) {
    videoEl.src = currentVideoPath.value
    videoEl.play()
    store.playState = PlayState.PLAY
  }
})

const handleTimeUpdate = (ev: Event) => store.currentTime = (ev.target as HTMLMediaElement).currentTime
const handleDurationChange = (ev: Event) => store.totalTime = (ev.target as HTMLMediaElement).duration

const playState = computed(() => store.playState)
watch(playState, () => {
  const videoEl = video.value!
  switch (playState.value) {
    case PlayState.PLAY:
      if (currentVideoPath.value) videoEl.play()
      break
    case PlayState.PAUSE:
      if (currentVideoPath.value) videoEl.pause()
      break
    case PlayState.STOP:
      store.currentVideoPath = ""
      store.currentTime = 0
      store.totalTime = 0
      videoEl.pause()
      break
    default:
      break
  }
})

const currentTime = store.currentTime
const totalTime = store.totalTime
// 当前视频播放结束后自动播放下一条
watch([currentTime, totalTime], () => {
  // 无法做到完全相等，取一个区间即可
  if (Math.abs(totalTime - currentTime) <= 0.1) {
    const currentIndex = store.videoList.indexOf(store.currentVideoPath)

    if (currentIndex !== store.videoList.length - 1) store.currentVideoPath = store.videoList[currentIndex + 1]
  }
})
</script>

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