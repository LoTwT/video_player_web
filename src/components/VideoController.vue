<template>
  <div class="container">
    <div>
      <div class="progress">
        <div class="bar" :style="{ width: percent }"></div>
      </div>
    </div>
    <div class="btns">
      <span
        class="iconfont btn btn-play"
        v-if="playState !== PlayState.PLAY"
        @click="changePlayState(PlayState.PLAY)"
      >&#xe66e;</span>
      <span
        class="iconfont btn btn-pause"
        v-else-if="playState === PlayState.PLAY"
        @click="changePlayState(PlayState.PAUSE)"
      >&#xe8b8;</span>
      <span class="iconfont btn btn-stop" @click="changePlayState(PlayState.STOP)">&#xe8e0;</span>
      <span
        class="iconfont btn btn-backward"
        :class="{ disabled: !hasPrevVideo }"
        @click="changePrevVideo"
      >&#xe617;</span>
      <span
        class="iconfont btn btn-forward"
        :class="{ disabled: !hasNextVideo }"
        @click="changeNextVideo"
      >&#xe60a;</span>

      <span class="time">
        <span class="cur">{{ currentTime }}</span>
        <span class="sep">/</span>
        <span class="total">{{ totalTime }}</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { PlayState, useStore } from "@/store/index"
import { secondToString } from "@/utils/index"

const store = useStore()

const currentTime = computed(() => secondToString(store.currentTime))
const totalTime = computed(() => secondToString(store.totalTime))
const percent = computed(() => {
  if (store.totalTime === 0) {
    return "0%"
  }

  return (store.currentTime / store.totalTime) * 100 + "%"
})
const playState = computed(() => store.playState)

// 修改播放状态
const changePlayState = (playState: PlayState) => (store.playState = playState)
// 是否有前一条视频
const hasPrevVideo = computed(() => store.videoList.length > 0 && store.videoList[0] != store.currentVideoPath)
// 是否有后一条视频
const hasNextVideo = computed(() => store.videoList.length > 0 && store.videoList[store.videoList.length - 1] != store.currentVideoPath)
// 切换到上一条视频
const changePrevVideo = () => {
  const videoList = store.videoList
  if (!videoList.length) return

  const currentIndex = videoList.indexOf(store.currentVideoPath)
  if (currentIndex === 0) return
  else if (currentIndex === -1) store.currentVideoPath = videoList[0]
  else store.currentVideoPath = videoList[currentIndex - 1]
}
// 切换到下一条视频
const changeNextVideo = () => {
  const videoList = store.videoList
  if (!videoList.length) return

  const currentIndex = videoList.indexOf(store.currentVideoPath)
  if (currentIndex === videoList.length - 1) return
  else if (currentIndex === -1) store.currentVideoPath = videoList[videoList.length - 1]
  else store.currentVideoPath = videoList[currentIndex + 1]
}
</script>

<style scoped>
.container {
  background: #333;
  overflow: hidden;
}

/*  */
.progress {
  width: 100%;
  margin: 4px auto;
  height: 3px;
  background: #444;
}
.progress .bar {
  width: 0;
  height: 100%;
  background: #fae100;
}

/*  */
.btns {
  display: flex;
}
.btns .btn {
  width: 38px;
  height: 38px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  background: #333;
  border: 1px solid #000;
  border-right: none;
}
.btns .btn:hover {
  background: #666;
}

.btns .btn.disabled,
.btns .btn.disabled:hover {
  background: #333;
  color: rgba(255, 255, 255, 0.6);
}

.time {
  padding-left: 30px;
  font-size: 12px;
  flex: 1;
  line-height: 38px;
  height: 38px;
  border: 1px solid #000;
}

.time span {
  padding: 4px;
  color: #fff;
}

.time .sep,
.time .total {
  color: #666;
}
</style>