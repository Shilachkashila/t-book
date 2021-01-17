<template>
  <div id="app">
    <h1 class="title">контакты</h1>
    <span class="counter"
    >{{counter}}</span>
    <!-- v-on прослушка событий через $emit-->
    <formAdd
    v-on:add-numb="addNumb"
    />
    <phonList
    :numbers="numbers"
    v-on:remov-numb="removNumb"
    v-if="numbers.length"
    />
    <p class="placeholder_visible"
    v-else
    >нет контактов</p>
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
  this.counter--;
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
