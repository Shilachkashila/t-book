<template lang="html">
  <li>
    <p>
      <strong>{{index + 1}}</strong>
      <span>{{numb.telephone}}</span>
      <span>{{numb.title}}</span>
    </p>
    <button type="button" name="button"
     v-on:click="$emit('remov-numb', numb.id)">
    удалить</button>
  </li>
</template>

<script>
 export default {
  props: {
    numb: {
    type: Object,
    required: true
  },
  index: Number
  }
 };
</script>

<style scoped>
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #9966ff;
  padding: 8px;
  margin: 0 1rem 1rem;
}
input {
  margin: 0 1rem;
}
p :first-child {
  margin: 0 10px;
  color: #FF9900;
}
span {
  margin: 0 10px;
}
button {
  width: 80px;
  height: 2rem;
  background-color: #993366;
  border: 1px solid #993366;
  border-radius: 8px;
  color: #C4C4C4;
  font-size: 18px;
}
</style>
