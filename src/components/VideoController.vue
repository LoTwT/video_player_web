<template>
  <div class="container">
    <div>
      <div class="progress">
        <div class="bar"></div>
      </div>
    </div>
    <div class="btns">
      <span class="iconfont btn btn-play">&#xe66e;</span>
      <span class="iconfont btn btn-pause">&#xe8b8;</span>
      <span class="iconfont btn btn-stop">&#xe8e0;</span>
      <span class="iconfont btn btn-backward">&#xe617;</span>
      <span class="iconfont btn btn-forward">&#xe60a;</span>

      <span class="time">
        <span class="cur">00:00</span>
        <span class="sep">/</span>
        <span class="total">00:00</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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