<template>
  <div id="app">
      <h1 class="title">контакты</h1>
      <span>1</span>
        <form-app/>
        <p>нет контактов</p>
        <phonList/>
  </div>
</template>

<script>
import formApp from '@/components/formApp';
import phonList from '@/components/phonList';

export default {
name: 'app',
components: {
  formApp,
  phonList,
}
}
</script>

<style>
#app {
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
}
</style>
