<template>
  <div>
    <h2 class="title_two">контакты</h2>
    <span class="counter">
    {{counter}}
    </span>
    <!-- v-on прослушка событий через $emit-->
    <phonFormAdd
    v-on:add-numb="addNumb"
    />
    <phonList
    v-if="numbers.length"
    :numbers="numbers"
    v-on:remov-numb="removNumb"
    />
    <p class="placeholder_list"
    v-else
    >нет контактов</p>
  </div>
</template>

<script>
import phonFormAdd from '@/components/phonFormAdd';
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
  phonFormAdd,
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

<style scoped>
.title_two {
  display: inline-block;
}
.counter {
  margin-left: 10px;
  color: #FF9900;
  font-size: 16px;
  font-weight: bold;
}
.placeholder_list {
  color: #FF9900;
  font-size: 20px;
  font-weight: bold;
}
</style>
