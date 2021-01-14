<template lang="html">
      <li>
        <span :class="{done: todo.completed}">
          <input type="checkbox" v-on:change="todo.completed =! todo.completed">
          <strong>{{index + 1}}</strong>
          {{todo.title}}
        </span>
        <button type="button" name="button"
        v-on:click="$emit('remov-todo', todo.id)"
        >&times;</button>
      </li>
</template>

<script>
export default {
   props: {
     todo: {
     type: Object,
     required: true
   },
  index: Number
 }
};
</script>

<style lang="css" scoped>
li {
  display: flex;
  justify-content: space-between;
  border: 1px solid #9966ff;
  padding: 1rem;
  margin: 0 1rem 1rem;
}
input {
  margin-right: 1rem;
}
button {
  background-color: #993366;
  color: #C4C4C4;
  font-size: 16px;
}
.done {
  text-decoration: line-through;
}
</style>
