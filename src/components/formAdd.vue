<template>
  <div>
    <!-- вместо обычного(prevent)поведения формы(submit)приниает(=)функцию(onSubmit) -->
    <form v-on:submit.prevent="onSubmit">
      <input type="text" v-model='title'>
      <button type="submit" name="добавить"
      >добавить</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      title: ''
    }
  },
  methods: {
  onSubmit() {
    // всё что в поле data доступно через ключевое слово this
    console.log('Sabmit',this.title)
    // возможно использую для счётчика элементов
    if (this.title.trim()) {
      const newNumb = { id: Date.now(), title: this.title, completed: false }
      this.$emit('add-numb', newNumb)
      this.title = ''
    }
  }
}
}
</script>
<style scoped>
div {
  margin-bottom: 1rem;
}
form {
  display: inline-block;
  padding: 8px;
  border: 1px solid #9966ff;
}
input {
  box-sizing: border-box;
  height: 2rem;
  padding: 0 10px;
  font-size: 16px;
  border-color: transparent;
}
button {
  height: 2rem;
  width: 80px;
  border: 1px solid #9966ff;
  border-radius: 8px;
  background-color: #C4C4C4;
  color: #993366;
  font-size: 16px;
}
</style>
