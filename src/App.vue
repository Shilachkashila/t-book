<template>
  <div id="app">
    <h1 class="title">контакты</h1>
    <span
    >{{counter}}</span>
    <!-- v-on прослушка событий через $emit-->
    <formAdd
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
import formAdd from '@/components/formAdd';
import phonList from '@/components/phonList';

export default {
name: 'app',
data () {
  return {
  numbers: [],
  counter: 0,
};
},
components: {
  formAdd,
  phonList,
},
methods: {
  removNumb(id) {
  this.numbers = this.numbers.filter(t => t.id !==id);
},
  addNumb(numb) {
  this.numbers.push(numb);
  this.counter++;
  }
},
};
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
