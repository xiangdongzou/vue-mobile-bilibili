<template>
  <div>
    <div class="user-article">
      <div>
        <span>动态</span>
        <span>视频</span>
      </div>
    </div>
    <div class="user-content">
      <img src="@/assets/default_img.jpg" alt />
      <div class="text">
        <span>某某某</span>
        <span>12-05</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.user-article {
  display: flex;
  align-items: center;
  background-color: white;
  height: 11.111vw;
  padding: 0 2.778vw;
  border-top: 0.278vw solid #ddd;
  border-bottom: 0.278vw solid #ddd;
  span {
    margin: 0 1.944vw;
    color: #777;
  }
}
.user-content {
  background-color: white;
  width: 100%;
  height: 100px;
  padding: 10px 10px;
  img {
    float: left;
    width: 30px;
    height: 30px;
  }
  .text {
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    margin-left: 10px;
  }
}
</style>
