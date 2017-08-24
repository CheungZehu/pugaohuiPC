<template>
  <div id="app">
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
@import './assets/CSS/reset.css';
@import './assets/CSS/main.less';
@import '//at.alicdn.com/t/font_385904_mv9s8rl1aqyqfr.css';

#app {
  font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  margin: 0 auto;
  /*max-width: 1280px;*/
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
p {
  line-height: 1.5;
}

</style>
