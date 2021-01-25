<template>
  <div id="app">
    <h1 class="title">главная страница</h1>
    <hr>
    <router-view />
  </div>
</template>


<style>
#app {
  max-width: 600px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
* {
  padding: 0;
  margin: 0;
}
.title {
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: Montserrat;
  font-weight: 900;
  font-size: 34px;
  line-height: 34px;
  color: #999999;
  text-transform:uppercase;
}
.counter {
  margin-left: 10px;
  color: #FF9900;
  font-size: 16px;
  font-weight: bold;
}
.placeholder_visible {
  color: #FF9900;
  font-size: 20px;
  font-weight: bold;
}
</style>
