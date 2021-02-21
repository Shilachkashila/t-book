<template>
  <div id="app">
    <h1>моё приложение</h1>
    <hr>
    <!-- <router-link
      to="/Home">
      home</router-link> -->
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
h1, h2, h3 {
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: Montserrat;
  font-weight: 900;
  color: #999999;
  text-transform:uppercase;
}
h1 {
  font-size: 24px;
  line-height: 24px;
}
h2 {
  font-size: 34px;
  line-height: 34px;
}
input {
  font-size: 16px;
}
</style>
