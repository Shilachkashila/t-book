<template>
  <div>
    <h2 class="phone-book__title">контакты</h2>
    <span class="counter">
      {{ counter }}
    </span>
    <!-- v-on прослушка событий через $emit-->
    <phoneFormAdd
      @add-number="addNumber"
      />
    <phoneList
      v-if="numbers.length"
      :numbers="numbers"
      @remov-number="removNumber"
      />
    <p class="placeholder_list"
      v-else
      >нет контактов</p>
  </div>
</template>

<script>
import phoneFormAdd from '@/components/phoneFormAdd';
import phoneList from '@/components/phoneList';

export default {
name: 'app',
data () {
  return {
  numbers: [],
  counter: 0,
};
},
components: {
  phoneFormAdd,
  phoneList,
},
methods: {
  removeNumber(id) {
    this.numbers = this.numbers.filter(t => t.id !==id);
    this.counter--;
},
  addNumber(number) {
    this.numbers.push(number);
    this.counter++;
  }
},
};
</script>

<style scoped>
.phone-book__title {
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
