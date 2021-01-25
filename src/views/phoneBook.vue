<template>
  <div>
    <h2 class="title">контакты</h2>
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
