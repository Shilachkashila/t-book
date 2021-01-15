<template>
  <div id="app">
      <h1 class="title">контакты</h1>
      <span>1</span>
      <!-- v-on прослушка событий через $emit-->
        <formApp
        v-on:add-numb="addNumb"
        />
        <p>нет контактов</p>
        <phonList
        :numbers="numbers"
        v-on:remov-numb="removNumb"
        />
  </div>
</template>

<script>
import formApp from '@/components/formApp';
import phonList from '@/components/phonList';

export default {
name: 'app',
data () {
  return {
    numbers: [
    { id: 1, title: 111, completed: false },
    { id: 2, title: 222, completed: false }
  ]
  }
},
components: {
  formApp,
  phonList,
},
methods: {
  removNumb(id) {
  this.numbers = this.numbers.filter(t => t.id !==id)
},
  addNumb(numb) {
    this.numbers.push(numb)
  }
},
}
</script>

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
</style>
